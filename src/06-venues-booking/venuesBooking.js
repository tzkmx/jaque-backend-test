/** @module 06 - getNumOfVenuesRequired */

/**
 * @typedef {Object} RequiredInterval
 * @property {string} start initial Time for interval
 * @property {string} end ending Time for booking
 */

/**
 * Allows knowing the number of required classrooms for requested schedule.
 *
 * @example getNumOfVenuesRequired([
 *  {start: '11:00', end: '14:00' },
 *  {start: '14:30', end: '16:00' },
 *  {start: '12:00', end: '15:00' },
 * ]) === 2
 *
 * @param {RequiredInterval[]} scheduleRequest
 * @return {number} number of required classrooms for required classes
 */
module.exports = function getNumOfVenuesRequired (scheduleRequest) {
  const venuesBooking = new VenuesBooking()
  let requestIndex
  for (requestIndex = 0; requestIndex < scheduleRequest.length; requestIndex++) {
    const schedule = scheduleRequest[requestIndex]
    const start = convertToDate(schedule.start)
    const end = convertToDate(schedule.end)

    venuesBooking.bookClass({ start, end })
  }
  return venuesBooking.requiredClassRooms()
}

class VenuesBooking {
  constructor () {
    /**
     * Holds the classrooms required to host the classes requested.
     *
     * @type {Map<number, ClassRoomBooking>}
     */
    this.classrooms = new Map()
  }

  /**
   * Returns number of required classrooms for booked classes.
   *
   * @return {number}
   */
  requiredClassRooms () {
    return this.classrooms.size
  }

  /**
   * Register an interval for class and requests new classroom if needed.
   *
   * @param {RequiredInterval} schedule
   */
  bookClass (schedule) {
    if (this.requiredClassRooms() === 0) {
      this.bookClassAtRoom(schedule, 1)
      return
    }
    for (const classroom of this.classrooms.values()) {
      const canRegisterAtExistingRoom = classroom.attemptBookPeriod(schedule)
      if (canRegisterAtExistingRoom) return true
    }
    this.bookClassAtRoom(schedule, this.requiredClassRooms() + 1)
  }

  /**
   * Books first classroom and class.
   *
   * @param {RequiredInterval} schedule
   * @param {number} [roomNumber]
   */
  bookClassAtRoom (schedule, roomNumber) {
    const classRoomNumber = roomNumber || 1

    const classroom = new ClassRoomBooking()
    classroom.attemptBookPeriod(schedule)
    this.classrooms.set(classRoomNumber, classroom)
  }
}

class ClassRoomBooking {
  constructor () {
    /**
     * @typedef {Object} BookingRange
     * @property {Date} start
     * @property {Date} end
     */

    /**
     * @protected registered periods for this classroom
     * @type {Set<{BookingRange}>}
     */
    this.bookings = new Set()
  }

  /**
   * Allows booking a required interval or returns false if overlapped with existing.
   * @param {BookingRange} schedule
   * @return {boolean} classroom was booked for requested period if available
   */
  attemptBookPeriod (schedule) {
    const { start, end } = schedule

    if (!this.isAvailable(start, end)) {
      return false
    }

    this.bookings.add({ start, end })
  }

  /**
   * Answers if required interval is available.
   *
   * @param {Date} startTime
   * @param {Date} endTime
   * @return {boolean} classroom is available at required interval
   */
  isAvailable (startTime, endTime) {
    for (const booking of this.bookings) {
      if (this.startsWithinBooking(booking, startTime) ||
        this.endsWithinBooking(booking, endTime)) return false
    }
    return true
  }

  /**
   * Checks if wanted start time overlaps with booked range
   * @param {BookingRange} range
   * @param {Date} start
   * @return {boolean}
   */
  startsWithinBooking (range, start) {
    return range.start.getTime() <= start.getTime() &&
      start.getTime() < range.end.getTime()
  }

  /**
   * Checks if wanted end time overlaps with booked range
   * @param {BookingRange} range
   * @param {Date} end
   * @return {boolean}
   */
  endsWithinBooking (range, end) {
    return range.start.getTime() < end.getTime() &&
      end.getTime() <= range.end.getTime()
  }
}

/**
 * @private
 * @param {string} scheduleLimit
 * @return {Date}
 */
function convertToDate (scheduleLimit) {
  const firstParse = Date.parse(scheduleLimit)
  if (!isNaN(firstParse)) {
    return new Date(firstParse)
  }
  const simpleTimeExpr = /[0-9]{2}:[0-9]{2}/
  if (!simpleTimeExpr.test(scheduleLimit)) {
    throw RangeError('Unrecognized time expression:' + scheduleLimit)
  }

  const date = new Date()
  const [hours, minutes] = scheduleLimit.split(':')
  date.setHours(hours, minutes)
  return date
}
