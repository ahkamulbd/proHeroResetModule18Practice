/*
    প্রাকটিস প্রব্লেম-২: 

    তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 
*/

function trafficSignal(color) {
    if (color === 'green') {
        console.log('You can easily pass the road');
    }
    else if (color === 'yellow') {
        console.log('You will have to wait to pass the road');
    }
    else if (color === 'red') {
        console.log('You can not pass the road');
    }
    else {
        console.log('Not Valid Traffic Signal');
    }
}

var presentTrafficSignal = trafficSignal('orange');