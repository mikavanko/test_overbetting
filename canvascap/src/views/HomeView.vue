<script>
import { ref, onMounted } from "vue";
import CapImage from "@/static/images/cap.png";
import PrintImage from "@/static/images/print.png";

export default {
  components: {
    CapImage,
    PrintImage,
  },
  setup() {
    let canvas = null;
    let ctx = null;

    const fileInput = ref();

    async function drawCap() {
      return new Promise((resolve, reject) => {
        const capImg = new Image();
        capImg.src = CapImage;
        capImg.onload = function () {
          const iw = canvas.width;
          const ih = canvas.height;
          ctx.drawImage(capImg, 0, 0, iw, ih);

          resolve(capImg);
        };

        capImg.onerror = reject;
      });
    }

    function drawPrint(img) {
      img.onload = function () {
        const iw = img.width;
        const ih = img.height;

        // alert(iw)

        const xOffset = 168, //left padding
          yOffset = 102; //top padding

        const a = 112.0; //image width
        const b = 27; //round ness

        const scaleFactor = iw / (3 * a);

        // draw vertical slices
        for (let X = 0; X < iw; X += 1) {
          const y = (b / a) * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
          ctx.drawImage(
            img,
            X * scaleFactor,
            0,
            iw / 2.5,
            ih,
            X + xOffset,
            y + yOffset,
            1,
            400
          );
        }
      };
    }

    async function fileInputOnChange(e) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      await drawCap();

      const files = e.target.files; // FileList object
      const file = files[0];
      if (file.type.match("image.*")) {
        const reader = new FileReader();
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          if (e.target.readyState == FileReader.DONE) {
            const img = new Image();
            img.src = e.target.result;

            drawPrint(img);
          }
        };
      } else {
        alert("not an image");
      }
    }

    function loadImage() {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "image.png";
      link.click();
    }

    onMounted(async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");

      await drawCap();

      fileInput.value.onchange = fileInputOnChange;
    });

    return {
      fileInput,
      loadImage,
    };
  },
};
</script>

<template>
  <div class="page">
    <input type="file" ref="fileInput" />
    <canvas class="canvas" id="canvas" width="500" height="500" />
    <button @click="loadImage">Скачать</button>
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
}
.canvas {
  width: 500px;
  height: 500px;
}
</style>