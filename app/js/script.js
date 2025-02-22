
        // دالة لتغيير اللغة
function toggleLanguage() {
const isArabic = document.documentElement.getAttribute('dir') === 'rtl';
if (isArabic) {


      // تغيير إلى الإنجليزية
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.getElementById('weightLabel').innerText = 'Weight (grams)';
      document.getElementById('karatLabel').innerText = 'Karat';
      document.getElementById('priceGoldLabel').innerText = 'Gold Price (per gram)';
      document.getElementById('calculateButton').innerText = 'Calculate';
      document.querySelector('.language-switcher').innerText = 'العربية';
      goldImage.src = './image/gold_en.png'; // تغيير الصورة للعربية
      document.getElementById('Zakat').innerText = 'Calculation of Zakat on Gold';

      // تغيير نصوص القائمة المنسدلة
      const karatOptions = document.getElementById('karat').options;
      karatOptions[0].text = '18';
      karatOptions[1].text = '21';
      karatOptions[2].text = '24 (Pure Gold)';
} else {


      // تغيير إلى العربية
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.getElementById('weightLabel').innerText = 'الوزن (جرام)';
      document.getElementById('karatLabel').innerText = 'العيار';
      document.getElementById('priceGoldLabel').innerText = 'سعر الذهب (للجرام)';
      document.getElementById('calculateButton').innerText = 'احسب';
      document.querySelector('.language-switcher').innerText = 'English';
      goldImage.src = './image/gold_ar.png'; // تغيير الصورة للعربية
      document.getElementById('Zakat').innerText = 'حساب ذكاة الذهب';
      // تغيير نصوص القائمة المنسدلة
      const karatOptions = document.getElementById('karat').options;
      karatOptions[0].text = '18';
      karatOptions[1].text = '21';
      karatOptions[2].text = '24 (ذهب خالص)';
}
}

// دالة الحساب
function calculate() {
// الحصول على القيم من الحقول
const weight = parseFloat(document.getElementById('weight').value);
const karat = parseFloat(document.getElementById('karat').value);
const priceGold = parseFloat(document.getElementById('price_gold').value);

// التأكد من أن القيم ليست NaN
if (isNaN(weight) || isNaN(karat) || isNaN(priceGold)) {
      alert(document.documentElement.getAttribute('dir') === 'rtl' ? "يرجى إدخال أرقام صحيحة في جميع الحقول." : "Please enter valid numbers in all fields.");
      return;
}

// // حساب النتيجة (وزن × سعر الذهب × نسبة العيار)
// if(karat==24){
//       const result = (weight * priceGold) / 40;  
// } else if(karat==18 || karat==21){
//       const result1 = (karat * weight) / 24;
//       const result = (result1 * priceGold) / 40; 

// }

// let result;

// if (karat == 24) {
//   result = (weight * priceGold) / 40;
// } else if (karat == 18 || karat == 21) {
//   const result1 = (karat * weight) / 24;
//   result = (result1 * priceGold) / 40;
// }


function calculateResult(weight, priceGold, karat) {
      let result;
      
      if (karat == 24) {
        result = (weight * priceGold) / 40;
      } else if (karat == 18 || karat == 21) {
        const result1 = (karat * weight) / 24;
        result = (result1 * priceGold) / 40;
      }
      
      return result;
    }
    const result = calculateResult(weight, priceGold, karat);
    
    // Format the result with commas and two decimal places
    const formattedResult = result.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });


// عرض النتيجة
document.getElementById('result').innerText = document.documentElement.getAttribute('dir') === 'rtl' ? `النتيجة: ${formattedResult}` : `Result: ${formattedResult}`;
}
   