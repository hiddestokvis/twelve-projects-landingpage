/*
* isNotEmpty()
* Check if value is not empty or null
*
* @params {String | Number | Null} value: value to check
*/
export function isNotEmpty(value: string | number | null): boolean {
  return (
    typeof value !== 'undefined' &&
    value !== null &&
    value.toString().length > 0
  );
}

/*
* isTrue()
* Check if value is true
*
* @params {String | Number | Null} value: value to check
*/
export function isTrue(value: boolean | null): boolean {
  return (
    typeof value !== 'undefined' &&
    value !== null &&
    String(value) === 'true'
  );
}

/*
* isValidPostalCode()
* Check if value is a valid dutch postal code
*
* @params {String} value: value to check
*/
export function isValidPostalCode(value: string): boolean {
  const digitMatch = value.match(/\d+/);
  const characterMatch = value.match(/[a-zA-Z]+/);
  if (
    digitMatch &&
    characterMatch
  ) {
    return (
      digitMatch.join().length === 4 &&
      characterMatch.join().length === 2
    );
  }
  return false;
}

/*
* isValidPhoneNumber()
* check if value is a valid phone number
*
* @params {String} value: value to check
*/
export function isValidPhoneNumber(value: string): boolean {
  const digitMatch = value.match(/\d+/);
  if (digitMatch) {
    if (digitMatch.join().length > 9) {
      return true;
    }
  }
  return false;
}
