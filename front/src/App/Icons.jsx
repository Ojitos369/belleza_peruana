import React from 'react'

class Icons {
    sun() {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="sun-icon icon"
                viewBox="0 0 640 512">
                <path 
                    className='sun-primary'
                    d="M639.1 416C639.1 468.1 596.1 512 543.1 512H271.1c-53 0-96-43-96-95.99c0-50.62 39.25-91.62 88.88-95.37C264.7 317.8 263.1 315 263.1 312c0-61.86 50.25-111.1 112-111.1c45.38 0 84.25 27.13 101.9 65.1c9.876-6.249 21.5-9.999 34.13-9.999c35.25 0 63.1 28.63 63.1 64c0 1.875-.6203 3.619-.7453 5.619C612.7 338.6 639.1 373.9 639.1 416z"/>
                <path 
                    className='sun-secondary'
                    d="M144.7 303c-43.63-43.74-43.63-114.7 0-158.3c43.75-43.62 114.8-43.62 158.5 0c9.626 9.748 16.88 20.1 22.25 32.74c9.75-3.749 20.13-5.999 30.75-7.499l29.75-88.86c4-11.87-7.25-23.12-19.25-19.25L278.1 91.2L237.5 8.342c-5.5-11.12-21.5-11.12-27.13 0L168.1 91.2L81.1 61.83C69.22 57.96 57.97 69.21 61.85 81.08l29.38 87.73L8.344 210.3c-11.13 5.624-11.13 21.5 0 27.12l82.88 41.37l-29.38 87.86c-4 11.87 7.375 22.1 19.25 19.12l76.13-25.25c6-12.37 14-23.75 23.5-33.49C167.7 321.7 155.4 313.7 144.7 303zM139.1 223.8c0 40.87 29.25 74.86 67.88 82.36c8-4.749 16.38-8.873 25.25-11.75C238.5 250.2 264.1 211.9 300.5 189.4C287.2 160.3 257.1 139.9 223.1 139.9C177.7 139.9 139.1 177.6 139.1 223.8z"/>
            </svg>
        )
    }

    moon() {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="moon-icon icon"
                viewBox="0 0 576 512">
                <path 
                    className="moon-primary"
                    d="M415.1 431.1C415.1 476.2 380.2 512 335.1 512H95.99c-52.1 0-95.1-43-95.1-96c0-41.88 27.13-77.25 64.62-90.25c-.125-2-.6279-3.687-.6279-5.687c0-53 43-96.06 96-96.06c36.25 0 67.37 20.25 83.75 49.88c11.5-11 27-17.87 44.25-17.87c35.25 0 63.1 28.75 63.1 64c0 12-3.5 23.13-9.25 32.75C383.7 356.2 415.1 390.1 415.1 431.1z"/>
                <path 
                    className="moon-secondary"
                    d="M565.2 298.4c-92.1 17.75-178.5-53.62-178.5-147.6c0-54.25 29-104 76.12-130.9c7.375-4.125 5.375-15.12-2.75-16.63C448.4 1.125 436.7 0 424.1 0c-105.9 0-191.9 85.88-191.9 192c0 8.5 .6251 16.75 1.75 25c5.875 4.25 11.62 8.875 16.75 14.25C262.1 226.5 275.2 224 287.1 224c52.87 0 95.1 43.13 95.1 96c0 3.625-.25 7.25-.625 10.75c23.62 10.75 42.37 29.5 53.5 52.5c54.37-3.375 103.7-29.25 137.1-70.37C579.2 306.4 573.5 296.8 565.2 298.4z"/>
            </svg>
        )
    }

    peopleGroup() {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="people-group-icon icon"
                viewBox="0 0 640 512">
                <path 
                    className="people-group-primary"
                    d="M384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96zM384 448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304C448 348.7 421.8 387.2 384 405.2V448zM256 261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3V261.7zM400 304C400 287.8 393.1 272.9 384 261.7V346.3C393.1 335 400 320.2 400 304z"/>
                <path 
                    className="people-group-secondary"
                    d="M64 96C64 60.65 92.65 32 128 32C163.3 32 192 60.65 192 96C192 131.3 163.3 160 128 160C92.65 160 64 131.3 64 96zM192 394.5V448C192 465.7 177.7 480 160 480H96C78.33 480 64 465.7 64 448V405.2C26.16 387.2 0 348.7 0 304C0 242.1 50.14 192 112 192H144C163.7 192 182.3 197.1 198.4 206.1C174.6 231.8 160 266.2 160 304C160 338.3 171.1 369.8 192 394.5zM64 346.3V261.7C54.04 272.9 48 287.8 48 304C48 320.2 54.04 335.1 64 346.3zM448 394.5C468 369.8 480 338.3 480 304C480 266.2 465.4 231.8 441.6 206.1C457.7 197.1 476.3 192 496 192H528C589.9 192 640 242.1 640 304C640 348.7 613.8 387.2 576 405.2V448C576 465.7 561.7 480 544 480H480C462.3 480 448 465.7 448 448V394.5zM592 304C592 287.8 585.1 272.9 576 261.7V346.3C585.1 335 592 320.2 592 304zM448 96C448 60.65 476.7 32 512 32C547.3 32 576 60.65 576 96C576 131.3 547.3 160 512 160C476.7 160 448 131.3 448 96z"/>
            </svg>
        )
    }

    bars() {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="bars-icon icon"
                viewBox="0 0 448 512">
                <path 
                    className="bars-primary"
                    d="M416 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                <path 
                    className="bars-secondary"
                    d="M0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256z"/>
            </svg>
        )
    }

    userAlien() {
        return (
            <svg 
                className="user-alien-icon icon"
                viewBox="0 0 448 512">
                <path 
                    className="user-alien-primary"
                    d="M148 176h-24C117.4 176 112 181.4 112 188v8C112 229.1 138.9 256 172 256h24C202.6 256 208 250.6 208 244v-8C208 202.9 181.1 176 148 176zM324 176h-24c-33.13 0-60 26.88-60 60v8C240 250.6 245.4 256 252 256h24C309.1 256 336 229.1 336 196v-8C336 181.4 330.6 176 324 176z"/>
                <path 
                    className="user-alien-secondary"
                    d="M206.7 378.1c10.23 7.832 24.32 7.832 34.55 0C282.6 346.3 384 259.6 384 173.6C384 65.83 312.3 0 224 0C135.6 0 64 65.83 64 173.6C64 259.6 165.4 346.3 206.7 378.1zM240 236c0-33.13 26.88-60 60-60h24c6.625 0 12 5.375 12 12v8C336 229.1 309.1 256 276 256h-24C245.4 256 240 250.6 240 244V236zM112 196v-8C112 181.4 117.4 176 124 176h24C181.1 176 208 202.9 208 236v8C208 250.6 202.6 256 196 256h-24C138.9 256 112 229.1 112 196zM319.7 352.5c-20.72 20.3-41.57 37.69-58.92 51.03C250.2 411.6 237.2 416 224 416s-26.23-4.43-36.78-12.51c-17.33-13.33-38.17-30.7-58.88-50.99C57.07 355.2 0 413.4 0 485.3C0 500.1 11.94 512 26.66 512H421.3C436.1 512 448 500.1 448 485.3C448 413.4 390.9 355.2 319.7 352.5z"/>
            </svg>
        )
    }

    doorOpen() {
        return (
            <svg 
                className="door-open-icon icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512">
                <path 
                    className="door-open-primary"
                    d="M232 224c-13.25 0-24 14.37-24 31.1C208 273.6 218.8 288 232 288S256 273.6 256 256C256 238.4 245.3 224 232 224zM0 464v31.1C0 504.9 7.125 512 16 512H64v-63.1H16C7.125 448 0 455.1 0 464zM560 448H512V113.5c0-27.25-21.5-49.5-48-49.5L352 64.01V128h96V512h112c8.875 0 16-7.125 16-15.1v-31.1C576 455.1 568.9 448 560 448z"/>
                <path 
                    className="door-open-secondary"
                    d="M280.3 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V512h256V33.13C320 11.63 300.5-4.243 280.3 1.007zM232 288c-13.25 0-24-14.37-24-31.1c0-17.62 10.75-31.1 24-31.1S256 238.4 256 256C256 273.6 245.3 288 232 288z"/>
            </svg>
        )
    }

    alien8Bits() {
        return (
            <svg 
                className="alien-8-bits-icon icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512">
                <path 
                    className="alien-8-bits-primary"
                    d="M160 320h64V224H160V320zM352 224v96h64V224H352z"/>
                <path 
                    className="alien-8-bits-secondary"
                    d="M560 128l-32 .0001c-8.875 0-16 7.125-16 15.1v80h-32V176c0-8.875-7.125-16-16-16H416v-64L464 96C472.9 96 480 88.88 480 80v-32C480 39.12 472.9 32 464 32h-32C423.1 32 416 39.12 416 48V64l-48 .0002c-8.875 0-16 7.125-16 16v48H224v-48c0-8.875-7.125-16-16-16L160 64V48C160 39.12 152.9 32 144 32h-32C103.1 32 96 39.12 96 48v32C96 88.88 103.1 96 112 96L160 96v64H112c-8.875 0-16 7.125-16 16v48H64V144c0-8.875-7.125-15.1-16-15.1l-32-.0001c-8.875 0-16 7.125-16 15.1v128c0 8.875 7.125 16 16 16H64v80c0 8.875 7.125 16 16 16l48 0v80c0 8.875 7.125 16 16 16l96 0c8.875 0 16-7.125 16-15.1v-31.1c0-8.875-7.125-16-16-16H192v-32h192v32h-48c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 15.1 16 15.1l96 0c8.875 0 16-7.125 16-16v-80l48 0c8.875 0 16-7.125 16-16v-80h48c8.875 0 16-7.125 16-16v-128C576 135.1 568.9 128 560 128zM224 320H160V224h64V320zM416 320h-64V224h64V320z"/>
            </svg>
        )
    }

    cartShopping() {
        return (
            <svg 
                className="cart-shopping-icon icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512">
                <path 
                    className="cart-shopping-primary"
                    d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z"/>
                <path 
                    className="cart-shopping-secondary"
                    d="M121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L121.1 32z"/>
            </svg>
        )
    }

    circlePlus() {
        return (
            <svg
                className="circle-plus-icon icon" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
                <path 
                    className="circle-plus-primary"
                    d="M168 280C154.7 280 144 269.3 144 256C144 242.7 154.7 232 168 232H232V168C232 154.7 242.7 144 256 144C269.3 144 280 154.7 280 168V232H344C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H280V344C280 357.3 269.3 368 256 368C242.7 368 232 357.3 232 344V280H168z"/>
                <path 
                    className="circle-plus-secondary"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/>
            </svg>
        )
    }

    circleMinus() {
        return (
            <svg 
                className="circle-minus-icon icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
                <path 
                    className="circle-minus-primary"
                    d="M144 256C144 242.7 154.7 232 168 232H344C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H168C154.7 280 144 269.3 144 256z"/>
                <path 
                    className="circle-minus-secondary"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z"/>
            </svg>
        )
    }

    userSecret() {
        return (
            <svg 
                className="user-secret-icon icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512">
                <path 
                    className="user-secret-primary"
                    d="M105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H184L117.9 247.6C112.9 240.3 108.9 232.3 105.5 224zM377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48c-3.375 8.322-7.447 16.28-12.41 23.62L264 512h149.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM281.6 224C302.8 224 320 207 320 186V169.5C377.3 161.2 416 145.8 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 17.76 38.67 33.22 96 41.53v16.52C128 207 145.2 224 166.4 224h12.33c16.46 0 30.29-10.39 35.63-24.99C215.9 194.9 219.6 192 224 192s8.105 2.887 9.615 7.008C238.1 213.6 252.8 224 269.3 224H281.6z"/>
                <path 
                    className="user-secret-secondary"
                    d="M176 320l32 56l-31.99 103.1L184 512h80l7.988-32.05L240 376l32-56H176zM350.8 163.9C341.2 166 331.1 167.9 320 169.5v16.52C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C116.9 167.9 106.8 166 97.22 163.9C96.83 167.1 96 171.8 96 176c0 70.69 57.31 128 127.1 128S352 246.7 352 176C352 171.8 351.2 167.1 350.8 163.9z"/>
            </svg>
        )
    }

    onda() {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" >
                <path 
                    d="M0 402L21.5 419.3C43 436.7 86 471.3 128.8 478.5C171.7 485.7 214.3 465.3 257.2 464.8C300 464.3 343 483.7 385.8 483C428.7 482.3 471.3 461.7 514.2 457C557 452.3 600 463.7 642.8 462.5C685.7 461.3 728.3 447.7 771.2 447.7C814 447.7 857 461.3 878.5 468.2L900 475L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" 
                    fill="#fb89ec88">
                </path>
            </svg>
        )
    }

}

export { Icons };