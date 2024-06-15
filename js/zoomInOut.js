function zoomInImg() {
  if (screen.width < 992) {
    const modal = document.getElementsByClassName('idMyModal');
    const img = document.getElementsByClassName('toZoom');
    const modalImg = document.getElementsByClassName('modal-content1');
    for (let i = 0; i < img.length; i++) {
      img[i].onclick = function () {
        modal[i].style.display = "block";
        modalImg[i].src = this.src;
      }
    }

    var span = document.getElementsByClassName("close");
    for (let i = 0; i < span.length; i++) {
      span[i].onclick = function () {
        modal[i].style.display = "none";
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", zoomInImg);
window.addEventListener("resize", zoomInImg);