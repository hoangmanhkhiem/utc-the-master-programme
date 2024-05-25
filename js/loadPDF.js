pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.worker.min.js';
let totalPages;
let pathPDF;
if (window.location.pathname.includes("/enrollment")) {
    pathPDF = "assets/pdf/enrollment.pdf";
    totalPages = 16;
}
if (window.location.pathname.includes("/scholarships")) {
    pathPDF = "assets/pdf/881.pdf";
    totalPages = 2;

}

let currentPage = 1;
// Số trang của PDF
let scale = 1.5; // Tỷ lệ ban đầu
function updateCurrentPageDisplay() {
    document.getElementById('currentPageDisplay').textContent = 'Page: ' + currentPage + '/' + totalPages;
}
// Function to render PDF
function renderPDF(url, canvasContainer, pageNumber, pdfScale) {
    // Fetch PDF document
    updateCurrentPageDisplay();
    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        // Fetch the requested page
        pdf.getPage(pageNumber).then(function (page) {
            let viewport = page.getViewport({ scale: pdfScale });

            // Prepare canvas using PDF page dimensions
            let canvas = document.getElementById(canvasContainer);
            let context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            let renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });
}

// Initial rendering
renderPDF(pathPDF, 'pdfRenderer', currentPage, scale);

// Handle previous button click
document.getElementById('prevButton').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        renderPDF(pathPDF, 'pdfRenderer', currentPage, scale);
        updateCurrentPageDisplay();
    }
});

// Handle next button click
document.getElementById('nextButton').addEventListener('click', function () {
    if (currentPage < totalPages) {
        currentPage++;
        renderPDF(pathPDF, 'pdfRenderer', currentPage, scale);
        updateCurrentPageDisplay();
    }
});

// Handle zoom in button click
document.getElementById('zoomInButton').addEventListener('click', function () {
    scale += 0.1; // Tăng tỷ lệ
    renderPDF(pathPDF, 'pdfRenderer', currentPage, scale);
});

// Handle zoom out button click
document.getElementById('zoomOutButton').addEventListener('click', function () {
    scale -= 0.1;
    if (scale < 0.1) {
        scale = 0.1; // Đảm bảo tỷ lệ không nhỏ hơn 0.1
    }
    renderPDF(pathPDF, 'pdfRenderer', currentPage, scale);
});

