"use strict"

const openWindowBtn = document.querySelectorAll('.open-window-btn')

// Event click on buttons to open a pop-up window
for (let i = 0; i < openWindowBtn.length; i ++) {
    
    openWindowBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        researchDataBtn(event)
        veerArrowBtn(event.target)
  
        const towersBtn = document.querySelectorAll('.towers-btn')
        const floorBtn = document.querySelectorAll('.floor-btn')
        const roomBtn = document.querySelectorAll('.room-btn')
        funcResearchElement(towersBtn)
        funcResearchElement(floorBtn)
        funcResearchElement(roomBtn)

        findElem(document.querySelector('.t-start'))
        findElem(document.querySelector('.t-end'))
    })
}

// Function for checking the presence of an element
const funcResearchElement = (nameEl) => {
    if(nameEl.length !== 0){
        // Function call
        clickOnWindowBtn(nameEl)
    }
}

const researchDataBtn = (el) => {
    var parentEl = el.target.closest('.generel-styles').childNodes[5] // The block in which the pop-up window will be
    var parentElTime = el.target.closest('.general-styles__field').childNodes[5]
    for (let i = 0; i < Object.keys(pattern).length; i ++){
        if (el.target.getAttribute('data-btn') === Object.keys(pattern)[i]) { // comparison of the button's data attribute with the object's key
            var namePattern = Object.keys(pattern)[i] // the name of the key. For further comparison

            // If openWindowBtn has a "veer" class, general-absolute is cleared (To check for a click on another block)
            for (let i = 0; i < openWindowBtn.length; i ++) {
                if(openWindowBtn[i].childNodes[1].className == 'veer'){
                    document.querySelectorAll('.general-absolute')[i].innerHTML = ""
                }
            }

            // If the veerArrowBtn function is false.
            if ( veerArrowBtn(el.target) == false ){
                veerArrowBtn(el.target)
            } 
            // If the veerArrowBtn function is true. Checks the received name Pattern value and fills in parental
            else {   
                veerArrowBtn(el.target)
                // checking the key name. And calling the object that matched the name of the key
                if(namePattern == 'tower'){ 
                    parentEl.innerHTML = pattern.tower
                } else if (namePattern == 'floor') {
                    parentEl.innerHTML = pattern.floor
                } else if( namePattern == 'room') {
                    parentEl.innerHTML = pattern.room
                } else if( namePattern == 'time') {
                    parentElTime.innerHTML = pattern.time
                }
            }
        }        
    }
}

// Checking the event and adding a class for the arrow
const veerArrowBtn = ( btn ) => {
    if(btn.className == ''){
        // adds a new class in order to rotate the arrow
        btn.classList.add('veer')
        return true
    } else {
// // If the btn contains the "veer" class, when clicking on one of the btns again, all classes are divided (To check the click on another block)
// Removes the class that turns the arrow
        for (let i = 0; i < openWindowBtn.length; i ++){
                openWindowBtn[i].childNodes[1].className = ''
        }
        return false
    }
}

const pattern = {
    tower :
            `
                <div class="window-block window-block__towers">
                    <div class="window-block__btn-style towers-btn">
                        Башня А
                    </div>
                    <div class="window-block__btn-style towers-btn">
                        Башня Б
                    </div>
                </div>
            `,

    floor: `
            <div class="window-block window-block__floor">
                    <div class="window-block__btn-style floor-btn">
                        3
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        4
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        5
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        6
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        7
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        8
                    </div>
        
                    <div class="window-block__btn-style floor-btn">
                        9
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        10
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        11
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        12
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        13
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        14
                    </div>
        
        
                    <div class="window-block__btn-style floor-btn">
                        15
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        16
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        17
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        18
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        19
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        20
                    </div>
        
                    <div class="window-block__btn-style floor-btn">
                        21
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        22
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        23
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        24
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        25
                    </div>
                    <div class="window-block__btn-style floor-btn">
                        26
                    </div>
        
                    <div class="window-block__btn-style floor-btn">
                        27
                </div>
            </div>
        `,
    room: `
            <div class="window-block">
                <div class="window-block__btn-style room-btn">
                    1
                </div>
                <div class="window-block__btn-style room-btn">
                    2
                </div>
                <div class="window-block__btn-style room-btn">
                    3
                </div>
                <div class="window-block__btn-style room-btn">
                    4
                </div>
                <div class="window-block__btn-style room-btn">
                    5
                </div>
                <div class="window-block__btn-style room-btn">
                    6
                </div>
        
                <div class="window-block__btn-style room-btn">
                    7
                </div>
                    
                <div class="window-block__btn-style room-btn">
                     8
                </div>
                    
                <div class="window-block__btn-style room-btn">
                    9
                </div>
                <div class="window-block__btn-style room-btn">
                    10
                </div>
            </div>
        `,
    time: `
        <div class="window-block window-block-time">
            <label for="t-start" class="general-styles__field__vall">От</label>
            <input type="time" id="t-start" class="window-block__btn-style t-start">
            <label for="t-end" class="general-styles__field__vall">До</label>
            <input type="time" is="t-end" class="window-block__btn-style t-end">
        </div>
    `
}

// Gets the value of the button that was clicked and changes the value of the field
const clickOnWindowBtn = (button) => {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (event) => {
            for (let q = 0; q < button.length; q++) {
                button[q].classList.remove('active')
           }
            button[i].classList.add('active')
            event.target.closest('.generel-styles').childNodes[3].childNodes[1].innerHTML = button[i].innerHTML
            event.target.closest('.generel-styles').childNodes[3].childNodes[1].value = button[i].innerHTML
        })       
    }
}

// Getting the entered values
const sendJsonTxt = ( tower, floor, room, date, message, start, end ) => {
    let val = {
        towers: `${tower}`,
        floors: `Этаж;${floor}`, 
        rooms: `Комната;${room}`,
        dates: `Дата;${date}`,
        clocks: `От ${start} до ${end}`,
        messages: `Комментарий;${message}`
    }
    let jsonSend = JSON.stringify(val)
    console.log(jsonSend)
    return 0
}

const sendBtn = document.getElementById('sendBtn')
sendBtn.addEventListener('click', (event) => {
    event.preventDefault()
    researchInput(valueBlock)
})

// Checking fields for filling in
const valueBlock = document.querySelectorAll('.general-styles__field__vall');
var message = document.getElementById('comm')
const dateVlock = document.getElementById("dateInput")

const researchInput = (block) => {
    for ( let i = 0; i < block.length; i ++) {
        if(block[i].value === undefined || message.value == '' || dateVlock.value == '' || document.querySelector('.starts-time').innerHTML == '00:00' || document.querySelector('.end-tim').innerHTML == '00:00') {
            bloksAddClassEndRemove(document.querySelector('.error-txt'), 2000)
        }else {
            sendJsonTxt(block[0].value, block[1].value, block[2].value, dateVlock.value, message.value, document.querySelector('.starts-time').innerHTML, document.querySelector('.end-tim').innerHTML)
            bloksAddClassEndRemove(document.querySelector('.succes-txt'), 3000)
            clearUsText()
        }
    }
}

//Clearing all fields
const clearUsText = () => {
    for ( let i = 0; i < valueBlock.length; i ++) {
        valueBlock[i].value = ''
        message.value = ''
        dateVlock.value = ''
        document.querySelector('.starts-time').innerHTML = '00:00'
        document.querySelector('.end-tim').innerHTML = '00:00'

        valueBlock[0].innerHTML = 'Выберите башню'
        valueBlock[1].innerHTML = 'Выберите этаж'
        valueBlock[2].innerHTML = 'Выберите переговорную'
    }
}

// Function for blocks about successful sending and filling in fields
const bloksAddClassEndRemove = (name, time) => {
    name.classList.add('active')
    setTimeout(function(){
        name.classList.remove('active')
    }, time);
}

const ClearButton = document.querySelector('.clear-btn')

ClearButton.addEventListener('click', () => {clearUsText()})
const findElem = (element) => {
    if(typeof(element) != undefined && element != null) { 
        timeResearch(element)
    } 
}
const timeResearch = (elem) => {
    elem.addEventListener('change', () => {
        if ( elem.classList[1] == 't-start') {
            var start = elem.value
            document.querySelector('.starts-time').innerHTML = start
            console.log(start)
        } else {
            var end = elem.value
            document.querySelector('.end-tim').innerHTML = end
        }
    })
}

