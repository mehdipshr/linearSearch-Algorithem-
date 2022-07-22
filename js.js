// جستجوی خطی یا جستجوی ترتیبی در علوم رایانه به روش یافتن مقدار هدف درون یک لیست گفته می‌شود.
// این روش به صورت ترتیبی هر عنصر لیست را برای یافتن مقدار هدف بررسی می‌کند
// تا این که یک مورد مطابقت پیدا شود و یا این که همه عناصر مورد جستجو قرار گیرند.

// پیچیدگی زمانی
// از آنجا که در بدترین حالت باید به بررسی هر عنصر دقیقاً یک بار بپردازیم،
//  پیچیدگی زمانی این روش برابر با O(n) است.

function linearSearch(arr, item) {
    for (const element of arr) {
        if (element === item) {
            return "Found";
        }
    }

    return "Not Found";
}

console.log(linearSearch([10, 15, 20, 30], 30));
//output: Found
