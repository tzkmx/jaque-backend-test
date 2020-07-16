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
})
