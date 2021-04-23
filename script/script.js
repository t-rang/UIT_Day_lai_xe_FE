// Index - Courses - Show course preview
var i = 0;
var courses = [
    {
        "id": "0",
        "title": "Bằng B1",
        "img": "image/course-car-b1.1.png",
        "desc": "Bằng lái xe hạng B1 là loại số tự động cấp cho người không hành nghề lái xe để điều khiển ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe, ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật.",
    },
    {
        "id": "1",
        "title": "Bằng B2",
        "img": "image/course-car-b2.png",
        "desc": "Bằng lái B2 cấp cho người hành nghề lái xe để điều khiển ô tô chuyên dùng có trọng tải thiết kế dưới 3.500 kg; các loại xe quy định cho giấy phép lái xe hạng B",
    },
    {
        "id": "2",
        "title": "Bằng C",
        "img": "image/course-car-c.png",
        "desc": "Bằng lái xe hạng C cấp cho người lái xe để điều khiển ô tô tải, kể cả ô tô tải chuyên dùng, ô tô chuyên dùng có trọng tải thiết kế từ 3.500 kg trở lên, máy kéo kéo một rơ moóc có trọng tải thiết kế từ 3.500 kg trở lên, các loại xe quy định cho giấy phép lái xe hạng B1, bằng lái B2.</li></ul>",
    },
    {
        "id": "3",
        "title": "Bằng D",
        "img": "image/course-car-d.png",
        "desc": "Bằng lái xe hạng D cấp cho người lái xe để điều khiển các loại xe quy định ở hạng C, lái xe chở người từ 10 – 30 chỗ ngồi. Giấy phép hạng D đòi hỏi người lái xe phải có kinh nghiệm lái và số km an toàn nhất định.",
    },
    {
        "id": "4",
        "title": "Bằng E",
        "img": "image/course-car-e.png",
        "desc": "Bằng lái xe hạng E cấp cho người lái xe để điều khiển các loại xe quy định ở hạng D, lái xe chở người trên 30 chỗ ngồi. Giấy phép hạng E đòi hỏi người lái xe phải có kinh nghiệm lái và số km an toàn nhất định.",
    },
    {
        "id": "5",
        "title": "Bằng F",
        "img": "image/course-car-f.png",
        "desc": "Bằng lái xe hạng F cấp cho người lái xe đã có giấy phép lái xe hạng B2, D, E để lái các loại xe quy định cho các giấy phép lái xe hạng này khi kéo rơ moóc hoặc xe ô tô chở khách nối toa. Giấy phép hạng F đòi hỏi người lái xe phải có kinh nghiệm lái và số km an toàn nhất định.",
    },
];
function showCoursePreview(i) {
    document.getElementById("course-title").innerHTML = courses[i].title;
    document.getElementById("course-image").src = courses[i].img;
    document.getElementById("course-desc").innerHTML = courses[i].desc;
}
// Course details - Adjust content 
function goToCourseDetail() {
    var title = document.getElementById("course-title").innerHTML;
    for (i = 0; i < courses.length; i++) {
        if (title == courses[i].title) {
            location.replace(`course.html?id=${i}`);
        }
    }
}
function updateCourseDetail(i) {
    document.getElementById("course-details-img").src = courses[i].img;
    document.getElementById("course-details-title").innerHTML = courses[i].title;
    document.getElementById("course-details-desc").innerHTML = courses[i].desc;
}
function getCourseDetail() {
    var j = window.location.href.split("").pop();
    updateCourseDetail(j);
}

// Index - Testimony - Show testimony slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimony-slide");
    var dots = document.getElementsByClassName("testimony-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Index - Signup - Validate form
function validateForm() {
    var name, phone, license;
    var nameResult = "";
    var phoneResult = "";
    var licenseResult = "";
    var formResult = "";

    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    license = document.getElementById("license").value;

    if (name == "") {
        nameResult = "Thông tin không được bỏ trống.";
    }
    if (phone == "") {
        phoneResult = "Thông tin không được bỏ trống.";
    }
    if (license == "") {
        licenseResult = "Thông tin không được bỏ trống.";
    }
    if (name != "" && phone != "" && license != "") {
        formResult = "Chúng tôi đã nhận được đăng ký của bạn.";
    }
    document.getElementById("nameResult").innerHTML = nameResult;
    document.getElementById("phoneResult").innerHTML = phoneResult;
    document.getElementById("licenseResult").innerHTML = licenseResult;
    document.getElementById("formResult").innerHTML = formResult;
}
// </script>

// </body>
// </html> 
