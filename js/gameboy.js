class Device {
  constructor() {
    this.device = gameBoyAdvance;
    this.dispositivo();
  }

  dispositivo() {
    const app = document.getElementById('app');
    app.innerHTML = this.device;
  }
}

const gameBoyAdvance = `
<div class="wrapper">
      <div class="container small-device">
        <div class="start-btn-overlay"></div>
        <div class="pointer-arrow">
          <img src="./imagenes/arrow.png" alt="">
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 551.1 317" enable-background="new 0 0 551.1 317" xml:space="preserve">
          <!-- R -->
          <path id="button_r" fill="#BDC3C7" d="M522.4,40.2c-13.4-8.7-64.5-13.3-94.2-29.8c0,0,72.7,7.9,83.2,10.9c13.7,3.8,23.8,29.5,23.8,29.5
      l-5.9,3.5C527.3,47.3,525.1,42.3,522.4,40.2z" />
          <!-- L -->
          <path id="button_l" fill="#BDC3C7" d="M28.7,40.2c13.4-8.7,64.5-13.3,94.2-29.8c0,0-72.7,7.9-83.2,10.9C26,25.1,15.9,50.9,15.9,50.9
      l5.9,3.5C23.8,47.3,26,42.3,28.7,40.2z" />

          <!-- Gameboy -->
          <path id="gameboy" fill="#D6D6D6" d="M542.4,194.1c-2.3-43.5-5.5-142.6-20-153.9c-13.4-8.7-64.5-13.3-94.2-29.8
      c-9.1-4-9.8-10.5-18.2-10.5C406,0,145.1,0,141,0c-8.3,0-9.1,6.5-18.2,10.5C93.2,26.9,42,31.5,28.7,40.2
      C14.2,51.5,11,150.6,8.7,194.1c-2.3,43.5-2.7,52.6,13.6,67.4c16.2,14.8,75.5,22.4,87.8,30c51.1,27.1,165.5,25.5,165.5,25.5
      s114.4,1.7,165.5-25.5c12.3-7.6,71.6-15.2,87.8-30C545.1,246.7,544.8,237.6,542.4,194.1z" />

          <!-- Gameboy Parts -->
          <g>
            <path fill="#BDC3C7" d="M22.2,261.5C6,246.7,6.3,237.6,8.7,194.1c1.7-31.8,3.9-93.3,10.6-128.5
        c-2.4-0.2-5.6-0.2-7,0.9c-2.4,1.8-10.6,134.8-12,147c-1.4,12.1,2.4,38.6,10.3,47.7c7.9,9.1,22.6,17.4,27.3,12.9
        c1.2-1.2,1.9-2.1,2.4-3C32.6,268.3,26.2,265.1,22.2,261.5z" />
            <path fill="#BDC3C7" d="M528.9,261.5c16.2-14.8,15.9-23.9,13.6-67.4c-1.7-31.8-3.9-93.3-10.6-128.5
        c2.4-0.2,5.6-0.2,7,0.9c2.4,1.8,10.6,134.8,12,147c1.4,12.1-2.4,38.6-10.3,47.7c-7.9,9.1-22.6,17.4-27.3,12.9
        c-1.2-1.2-1.9-2.1-2.4-3C518.5,268.3,525,265.1,528.9,261.5z" />
            <path id="screen_outline" fill="#2B2B2B" d="M402.5,43.3c-18.5-8.8-127-11.1-127-11.1s-108.5,2.3-127,11.1c-15.4,7.6-20,187.6-12,212.1
        c15,28.4,138.9,29.1,138.9,29.1s123.9-0.6,138.9-29.1C422.5,230.9,417.9,50.9,402.5,43.3z" />
            <rect x="155.6" y="61.8" fill="#BDC3C7" width="240" height="160" />
            <g>
              <circle class="power-btn" fill="#cb3535" cx="451.1" cy="56.8" r="5.5" />
              <g opacity="0.25">
                <path d="M459.6,60.8v-8.6h2.7c0.6,0,1.1,0.1,1.4,0.2c0.4,0.1,0.7,0.4,1,0.8s0.4,0.9,0.4,1.5c0,0.8-0.2,1.4-0.6,1.9
            s-1.1,0.7-2,0.7h-1.8v3.5H459.6z M460.5,56.3h1.8c0.6,0,1-0.1,1.3-0.4s0.4-0.7,0.4-1.2c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.4-0.5-0.5
            s-0.5-0.1-1-0.1h-1.8V56.3z" />
                <path d="M465.9,56.6c0-1.5,0.3-2.6,1-3.4s1.4-1.2,2.4-1.2c0.6,0,1.2,0.2,1.7,0.5s0.9,0.9,1.2,1.5s0.4,1.5,0.4,2.4
            c0,1.3-0.3,2.3-0.9,3.1c-0.6,0.9-1.5,1.3-2.5,1.3c-1,0-1.9-0.5-2.5-1.4C466.2,58.7,465.9,57.8,465.9,56.6z M466.8,56.6
            c0,1.1,0.2,1.9,0.7,2.5c0.5,0.6,1,0.9,1.7,0.9c0.7,0,1.3-0.3,1.7-0.9c0.5-0.6,0.7-1.5,0.7-2.6c0-0.7-0.1-1.4-0.4-2
            c-0.2-0.4-0.5-0.8-0.8-1.1c-0.4-0.3-0.8-0.4-1.2-0.4c-0.7,0-1.3,0.3-1.7,0.9S466.8,55.4,466.8,56.6z" />
                <path d="M475,60.8l-1.9-8.6h1l1.1,5.6c0.1,0.6,0.2,1.2,0.3,1.8l0.3-1.6l1.3-5.8h1.1l1,4.3c0.2,1.1,0.4,2.1,0.5,3
            c0.1-0.6,0.2-1.2,0.3-1.9l1.1-5.5h0.9l-1.9,8.6h-0.9l-1.5-6.5l-0.2-1c-0.1,0.4-0.1,0.7-0.2,1l-1.5,6.5H475z" />
                <path d="M483.1,60.8v-8.6h5.1v1H484v2.6h3.9v1H484v2.9h4.3v1H483.1z" />
                <path d="M489.6,60.8v-8.6h3.1c0.7,0,1.1,0.1,1.4,0.2s0.6,0.4,0.8,0.8c0.2,0.4,0.3,0.8,0.3,1.3c0,0.6-0.2,1.2-0.5,1.6
            c-0.3,0.4-0.8,0.7-1.5,0.8c0.3,0.2,0.5,0.3,0.6,0.5c0.3,0.3,0.5,0.7,0.7,1.1l1.2,2.3h-1.2l-0.9-1.8c-0.4-0.7-0.6-1.2-0.8-1.4
            c-0.2-0.2-0.4-0.4-0.5-0.5c-0.2-0.1-0.4-0.1-0.7-0.1h-1.1v3.8H489.6z M490.6,56h2c0.4,0,0.8-0.1,1-0.2s0.4-0.3,0.5-0.5
            s0.2-0.5,0.2-0.8c0-0.4-0.1-0.8-0.4-1s-0.6-0.4-1.1-0.4h-2.2V56z" />
              </g>
            </g>
            <g opacity="0.25">
              <path fill="#2B2B2B" d="M488.6,186.4l-60.2,16.1c-0.3,0.1-0.5,0.4-0.4,0.8l0.3,1c0.1,0.3,0.4,0.5,0.8,0.4l60.2-16.1
          c0.3-0.1,0.5-0.4,0.4-0.8l-0.3-1C489.3,186.5,488.9,186.3,488.6,186.4z" />
              <path fill="#2B2B2B" d="M488.6,199.1l-60.2,16.1c-0.3,0.1-0.5,0.4-0.4,0.8l0.3,1c0.1,0.3,0.4,0.5,0.8,0.4l60.2-16.1
          c0.3-0.1,0.5-0.4,0.4-0.8l-0.3-1C489.3,199.2,488.9,199,488.6,199.1z" />
              <path fill="#2B2B2B" d="M488.6,211.9L428.4,228c-0.3,0.1-0.5,0.4-0.4,0.8l0.3,1c0.1,0.3,0.4,0.5,0.8,0.4l60.2-16.1
          c0.3-0.1,0.5-0.4,0.4-0.8l-0.3-1C489.3,212,488.9,211.8,488.6,211.9z" />
              <path fill="#2B2B2B" d="M488.6,224.6l-60.2,16.1c-0.3,0.1-0.5,0.4-0.4,0.8l0.3,1c0.1,0.3,0.4,0.5,0.8,0.4l60.2-16.1
          c0.3-0.1,0.5-0.4,0.4-0.8l-0.3-1C489.3,224.7,488.9,224.5,488.6,224.6z" />
              <path fill="#2B2B2B" d="M488.6,237.3l-60.2,16.1c-0.3,0.1-0.5,0.4-0.4,0.8l0.3,1c0.1,0.3,0.4,0.5,0.8,0.4l60.2-16.1
          c0.3-0.1,0.5-0.4,0.4-0.8l-0.3-1C489.3,237.4,488.9,237.2,488.6,237.3z" />
            </g>
          </g>

          <!-- D-Pad -->
          <g>
            <linearGradient id="shadow_up" gradientUnits="userSpaceOnUse" x1="75.5005" y1="167.1364" x2="75.5005"
              y2="96.0455">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <linearGradient id="shadow_right" gradientUnits="userSpaceOnUse" x1="39.9551" y1="131.5909" x2="111.046"
              y2="131.5909">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <linearGradient id="shadow_bottom" gradientUnits="userSpaceOnUse" x1="75.5005" y1="96.0455" x2="75.5005"
              y2="167.1364">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <linearGradient id="shadow_left" gradientUnits="userSpaceOnUse" x1="111.046" y1="131.5909" x2="39.9551"
              y2="131.5909">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <path id="pad" fill="#BDC3C7" stroke="url(#shadow_right)" stroke-width="0" stroke-miterlimit="10"
              d="M107.9,120.5H86.6V99.2
        c0-1.2-0.9-2.1-2.1-2.1h-18c-1.2,0-2.1,0.9-2.1,2.1v21.3H43.1c-1.2,0-2.1,0.9-2.1,2.1v18c0,1.2,0.9,2.1,2.1,2.1h21.3V164
        c0,1.2,0.9,2.1,2.1,2.1h18c1.2,0,2.1-0.9,2.1-2.1v-21.3h21.3c1.2,0,2.1-0.9,2.1-2.1v-18C110,121.4,109.1,120.5,107.9,120.5z" />
            <g id="Fleche" opacity="0.15">
              <polygon fill="#2B2B2B" points="76,100 81.6,111.4 70.3,111.4" />
              <polygon fill="#2B2B2B" points="43.9,131.1 55.3,125.5 55.3,136.8" />
              <polygon fill="#2B2B2B" points="75,163.2 69.4,151.8 80.7,151.8" />
              <polygon fill="#2B2B2B" points="107.1,132 95.7,137.7 95.7,126.4" />
            </g>
          </g>
          <!-- Start -->
          <g>
            <linearGradient id="shadow_start" gradientUnits="userSpaceOnUse" x1="112.3252" y1="200.1532" x2="112.3252"
              y2="218.2177">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <circle id="button_start" fill="#BDC3C7" stroke="url(#shadow_start)" stroke-width="0" stroke-miterlimit="10"
              cx="112.3" cy="209.2" r="8" />
            <g opacity="0.25">
              <path fill="none" stroke="#2B2B2B" stroke-width="0.5" stroke-miterlimit="10"
                d="M117.2,200.7
          L68,187.6c-4.4-1.2-9,1.9-10.4,7c-1.3,5,1.1,10,5.5,11.2l49.2,13.2c4.4,1.2,9-1.9,10.4-7C124,206.9,121.6,201.9,117.2,200.7z" />
              <path d="M69.9,198.4l0.8,0.1c-0.1,0.4-0.1,0.8,0,1.1c0.1,0.3,0.2,0.5,0.5,0.7s0.5,0.4,0.9,0.5
          c0.5,0.1,0.9,0.1,1.2-0.1c0.3-0.2,0.6-0.4,0.7-0.8c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.2-0.6-0.4-1.2-0.8
          c-0.5-0.3-0.9-0.6-1.1-0.9c-0.2-0.2-0.3-0.5-0.4-0.8c-0.1-0.3-0.1-0.6,0-1c0.2-0.6,0.5-1.1,1-1.3c0.5-0.3,1.1-0.3,1.8-0.2
          c0.5,0.1,0.8,0.3,1.1,0.6c0.3,0.3,0.5,0.6,0.6,1c0.1,0.4,0.1,0.8,0,1.3l-0.8-0.1c0.1-0.5,0-0.9-0.1-1.2s-0.5-0.5-1-0.6
          c-0.5-0.1-0.9-0.1-1.2,0c-0.3,0.1-0.5,0.4-0.6,0.7c-0.1,0.3-0.1,0.6,0.1,0.8c0.1,0.2,0.5,0.5,1.1,0.8c0.6,0.3,1,0.6,1.2,0.8
          c0.3,0.3,0.5,0.6,0.7,1c0.1,0.4,0.1,0.8,0,1.2c-0.1,0.4-0.3,0.8-0.6,1.1c-0.3,0.3-0.7,0.5-1.1,0.6c-0.4,0.1-0.8,0.1-1.3-0.1
          c-0.8-0.2-1.3-0.6-1.7-1.2C69.8,199.9,69.7,199.2,69.9,198.4z" />
              <path d="M77,202.9l1.8-6.7l-2.1-0.6l0.2-0.9l4.9,1.3l-0.2,0.9l-2.1-0.6l-1.8,6.7L77,202.9z" />
              <path d="M79.4,203.5l4.4-7l0.9,0.2l0.5,8.3l-0.9-0.3l-0.1-2.5l-2.6-0.7l-1.3,2.1L79.4,203.5z M82,200.9l2.1,0.6
          l-0.1-2.3c0-0.7,0-1.3,0-1.7c-0.2,0.5-0.5,0.9-0.7,1.4L82,200.9z" />
              <path d="M85.9,205.3l2-7.6l2.8,0.7c0.6,0.2,1,0.3,1.2,0.6c0.2,0.2,0.4,0.5,0.5,0.9c0.1,0.4,0.1,0.8,0,1.2
          c-0.2,0.6-0.4,1-0.8,1.3c-0.4,0.3-0.9,0.4-1.5,0.3c0.2,0.2,0.3,0.4,0.4,0.6c0.2,0.4,0.3,0.7,0.4,1.1l0.5,2.4l-1-0.3l-0.4-1.8
          c-0.2-0.7-0.3-1.2-0.4-1.4c-0.1-0.3-0.2-0.4-0.4-0.6c-0.1-0.1-0.3-0.2-0.6-0.3l-1-0.3l-0.9,3.4L85.9,205.3z M87.8,201.2l1.8,0.5
          c0.4,0.1,0.7,0.1,0.9,0.1s0.4-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.4,0.1-0.7-0.1-1c-0.2-0.3-0.5-0.5-0.9-0.6l-2-0.5
          L87.8,201.2z" />
              <path d="M93.6,207.4l1.8-6.7l-2.1-0.6l0.2-0.9l4.9,1.3l-0.2,0.9l-2.1-0.6l-1.8,6.7L93.6,207.4z" />
            </g>
          </g>
          <!-- Select -->
          <g>
            <linearGradient id="shadow_select" gradientUnits="userSpaceOnUse" x1="112.3252" y1="232.0909" x2="112.3252"
              y2="250.1555">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <circle id="button_select" fill="#BDC3C7" stroke="url(#shadow_select)" stroke-width="0"
              stroke-miterlimit="10" cx="112.3" cy="241.1" r="8" />
            <g opacity="0.25">
              <path fill="none" stroke="#2B2B2B" stroke-width="0.5" stroke-miterlimit="10"
                d="M117.2,232.7
          L68,219.5c-4.4-1.2-9,1.9-10.4,7c-1.3,5,1.1,10,5.5,11.2l49.2,13.2c4.4,1.2,9-1.9,10.4-7C124,238.9,121.6,233.9,117.2,232.7z" />
              <path d="M66.9,229.5l0.8,0.1c-0.1,0.4-0.1,0.8,0,1.1c0.1,0.3,0.2,0.5,0.5,0.7c0.2,0.2,0.5,0.4,0.9,0.5
          c0.5,0.1,0.9,0.1,1.2-0.1c0.3-0.2,0.6-0.4,0.7-0.8c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.2-0.6-0.4-1.2-0.8
          c-0.5-0.3-0.9-0.6-1.1-0.9c-0.2-0.2-0.3-0.5-0.4-0.8c-0.1-0.3-0.1-0.6,0-1c0.2-0.6,0.5-1.1,1-1.3c0.5-0.3,1.1-0.3,1.8-0.2
          c0.5,0.1,0.8,0.3,1.1,0.6c0.3,0.3,0.5,0.6,0.6,1c0.1,0.4,0.1,0.8,0,1.3l-0.8-0.1c0.1-0.5,0-0.9-0.1-1.2c-0.2-0.3-0.5-0.5-1-0.6
          c-0.5-0.1-0.9-0.1-1.2,0c-0.3,0.1-0.5,0.4-0.6,0.7c-0.1,0.3-0.1,0.6,0.1,0.8c0.1,0.2,0.5,0.5,1.1,0.8c0.6,0.3,1,0.6,1.2,0.8
          c0.3,0.3,0.5,0.6,0.7,1s0.1,0.8,0,1.2c-0.1,0.4-0.3,0.8-0.6,1.1c-0.3,0.3-0.6,0.5-1.1,0.6c-0.4,0.1-0.8,0.1-1.3-0.1
          c-0.8-0.2-1.3-0.6-1.7-1.2C66.7,231,66.7,230.3,66.9,229.5z" />
              <path d="M72.3,233.6l2-7.6l4.5,1.2l-0.2,0.9l-3.7-1l-0.6,2.3l3.5,0.9l-0.2,0.9l-3.5-0.9l-0.7,2.6l3.8,1l-0.2,0.9
          L72.3,233.6z" />
              <path d="M78.1,235.1l2-7.6l0.8,0.2l-1.8,6.7l3.1,0.8l-0.2,0.9L78.1,235.1z" />
              <path d="M83,236.4l2-7.6l4.5,1.2l-0.2,0.9l-3.7-1l-0.6,2.3l3.5,0.9l-0.2,0.9l-3.5-0.9l-0.7,2.6l3.8,1l-0.2,0.9
          L83,236.4z" />
              <path
                d="M93.9,236.5l0.8,0.5c-0.4,0.8-0.9,1.4-1.5,1.7c-0.6,0.3-1.2,0.4-1.8,0.2c-0.6-0.2-1-0.4-1.4-0.8
          c-0.3-0.4-0.5-0.9-0.6-1.6c-0.1-0.7,0-1.5,0.2-2.3c0.2-0.8,0.5-1.5,1-2c0.4-0.5,0.9-0.9,1.4-1c0.5-0.2,1.1-0.2,1.6,0
          c0.6,0.2,1.1,0.5,1.4,1c0.3,0.5,0.5,1.1,0.5,1.9l-0.9,0c0-1.1-0.4-1.8-1.2-2c-0.4-0.1-0.8-0.1-1.2,0c-0.4,0.1-0.7,0.4-1,0.8
          s-0.5,0.9-0.7,1.6c-0.3,1-0.3,1.9-0.1,2.5c0.2,0.6,0.6,1,1.3,1.2c0.4,0.1,0.9,0.1,1.3-0.2C93.3,237.6,93.6,237.1,93.9,236.5z" />
              <path d="M96.7,240.1l1.8-6.7l-2.1-0.5l0.2-0.9l4.9,1.3l-0.2,0.9l-2.1-0.6l-1.8,6.7L96.7,240.1z" />
            </g>
          </g>
          <!-- B -->
          <g>
            <linearGradient id="shadow_b" gradientUnits="userSpaceOnUse" x1="448.455" y1="120.1364" x2="448.455"
              y2="158.5">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <circle id="button_b" fill="#BDC3C7" stroke="url(#shadow_b)" stroke-width="0" stroke-miterlimit="10"
              cx="448.5" cy="139.3" r="18.2" />
            <g>
              <path opacity="0.25" d="M443.2,147v-14.3h4.4c0.9,0,1.6,0.1,2.1,0.4s0.9,0.7,1.3,1.3c0.3,0.6,0.5,1.2,0.5,1.9
          c0,0.7-0.1,1.2-0.4,1.8c-0.3,0.5-0.7,1-1.2,1.3c0.7,0.2,1.2,0.7,1.6,1.3c0.4,0.6,0.6,1.3,0.6,2.2c0,0.9-0.2,1.6-0.5,2.3
          c-0.4,0.7-0.8,1.1-1.4,1.4c-0.6,0.3-1.4,0.4-2.4,0.4H443.2z M444.7,138.7h2.5c0.7,0,1.1,0,1.4-0.1c0.4-0.1,0.7-0.4,0.9-0.7
          c0.2-0.3,0.3-0.8,0.3-1.3c0-0.5-0.1-0.9-0.3-1.3c-0.2-0.3-0.5-0.6-0.8-0.7s-0.9-0.2-1.8-0.2h-2.4V138.7z M444.7,145.3h2.9
          c0.6,0,1.1-0.1,1.4-0.2c0.4-0.2,0.8-0.4,1-0.8s0.3-0.9,0.3-1.5c0-0.5-0.1-1-0.3-1.4s-0.5-0.6-0.9-0.8s-1-0.3-1.8-0.3h-2.7V145.3z
          " />
            </g>
          </g>
          <!-- A -->
          <g>
            <linearGradient id="shadow_a" gradientUnits="userSpaceOnUse" x1="498.2278" y1="103.0909" x2="498.2278"
              y2="141.4546">
              <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0.25" />
            </linearGradient>
            <circle id="button_a" fill="#BDC3C7" stroke="url(#shadow_a)" stroke-width="0" stroke-miterlimit="10"
              cx="498.2" cy="122.3" r="18.2" />
            <g>
              <g>
                <path opacity="0.25" d="M492.2,129.9l4.5-14.3h1.7l4.8,14.3h-1.8l-1.4-4.3h-4.9l-1.3,4.3H492.2z M495.6,124.1h4l-1.2-4
            c-0.4-1.2-0.7-2.2-0.8-3c-0.2,0.9-0.4,1.8-0.6,2.7L495.6,124.1z" />
              </g>
            </g>
          </g>
        </svg>
        <div class="screen">
        </div>
      </div>
    </div>
  </div>


`;