/* eslint-env */
const getNumOfVenuesRequired = require('./venuesBooking')

describe('06. - getNumOfVenuesRequired', () => {
  it(`example description, required 2 classrooms for:
    3 classes, with 2 overlapping periods:
    {start: '11:00', end: '14:00' }
    {start: '14:30', end: '16:00' } <-- no overlap
    {start: '12:00', end: '15:00' } <-- overlap with first`, () => {
    const expectRequiredClassRooms = 2

    expect(getNumOfVenuesRequired([
      { start: '11:00', end: '14:00' },
      { start: '14:30', end: '16:00' },
      { start: '12:00', end: '15:00' }
    ]
    )).toStrictEqual(expectRequiredClassRooms)
  })

  it('books only one classroom if previous class ends at next start time', () => {
    const expectRequiredClassRooms = 1

    expect(getNumOfVenuesRequired([
      { start: '09:00', end: '11:00' },
      { start: '11:00', end: '14:00' },
      { start: '14:00', end: '16:00' }
    ]
    )).toStrictEqual(expectRequiredClassRooms)
  })
})
