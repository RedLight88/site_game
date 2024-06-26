// Character and sign setup
let charX = canvas.width / 2;
let charY = canvas.height / 2;
let speed = 6;
let direction = 'left';
let isModalVisible = false;
let currentOverlay = null;





const sceneConfigurations = {
    'farm': {
        'signPositions': {
            sign1: { x: 400, y: 200 },
            sign2: { x: 775, y: 180 },
            sign3: { x: 1200, y: 384 },
            sign4: { x: 390, y: 576 },
            sign5: {x: 100, y: 100}
        },
        'modalMessages': {
            sign1: "sign1",
            sign2: "sign2",
            sign3: "sign3",
            sign4: "sign4",
            sign5: "sign5"
        },
        'transitions': {
            left: 'city',
            right: 'birth',
            up: 'sunny',
            down: 'farm'
        }
    },
    'sunny': {
        'signPositions': {
            sign1: {x: 700, y:650},
            sign2: {x: 900, y:650},
            sign3: {x: 1100, y:650}
        },
        'modalMessages': {
            sign1: "sign1",
            sign2: "sign2",
            sign3:"sign3"
        },
        'transitions': {
            down: 'farm'
        }
    },
    'city': {
        'signPositions': {},
        'modalMessages': {},
        'transitions': {
            right: 'farm'
        }
    },
    'birth':{
        'signPositions': {
           sign1: { x: 750, y: 512 },
           sign2: { x: 850, y: 300 },
           sign3: { x: 1000, y: 300 },
           sign4: { x: 850, y: 512 },
            sign5: { x: 1100, y: 512 },
            sign6: { x: 1000, y: 512 },
            sign7: { x: 1050, y: 412 },
            sign8: { x: 800, y: 412 }
        },
        'modalMessages': {
            sign1: "none",
            sign2: "undefined",
            sign3: "&nbsp",
            sign4: "none",
            sign5: "undefined",
            sign6: "fuck",
            sign7: "this",
            sign8: "can't remember",

        },
        'transitions':{
            up: 'farm'
        }
    }
};
