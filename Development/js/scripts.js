// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {
  let message = "Hello";
  if (name) {
    message += name;
  }
  console.log(message);
}
greet();
greet(" Mohammad");

/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */
function isOdd(n) {
  if (n % 2 == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isOdd(4);
