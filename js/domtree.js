const width = 600;
const height = 550;
const quantity = 170;
const types = [ 'text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox' ];
const greetings = [ '圣诞节快乐','一直开开心心','要幸福哦','祝文飞小朋友收到圣诞老人的礼物','生活愉快','节日快乐','祝一切顺利','成功上岸','工作顺利','祝福你每天都有快乐与幸福相伴。','希望你的笑容能驱散所有阴霾，让生活充满阳光！','拥有美好心情的每一天，都因为有了你。','用真诚和善意点亮周围世界的灯塔就是你啊！','愿未来的日子里，幸福时刻常伴左右。','无论前方路途多么崎岖坎坷，在我看来，您永远向着成功奔跑不止!','百事可乐没有比得上您那样甜蜜温暖又耐人寻味。','您对别人总是如此体贴入微，在这个世界上他们应该感到非常荣幸。','你就像一朵绽放的花朵，散发着自己独特的馨香。','愿你如星辰般闪耀，永不停歇地前行!','以爱心为底色，用善意来填充每一天的画卷。','与其把希望寄托给别人，不如成为别人在黑暗中看到美好之光。','远近高低各异音”，世界处处有乐章等您去弹奏。'];

let tree = document.querySelector( '.tree' ),                                     
treeRotation = 0;

tree.style.width = width + 'px';
tree.style.height = height + 'px';

window.addEventListener( 'resize', resize, false );

// 树
for( var i = 0; i < quantity; i++ ) {
	let element = null,
		type = types[ Math.floor( Math.random() * types.length ) ],
		greeting = greetings[ Math.floor( Math.random() * greetings.length ) ];

	let x = width/2,
		y = Math.round( Math.random() * height );

	let rx = 0,
		ry = Math.random() * 360,
		rz = -Math.random() * 15;

	let elemenWidth = 5 + ( ( y / height ) * width / 2 ),
		elemenHeight = 26;

	switch( type ) {
		case 'button':
			element = document.createElement( 'button' );
			element.textContent = greeting;
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'progress':
			element = document.createElement( 'progress' );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			if( Math.random() > 0.5 ) {
				element.setAttribute( 'max', '100' );
				element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			}
			break;
		case 'select':
			element = document.createElement( 'select' );
			element.setAttribute( 'selected', greeting );
			element.innerHTML = '<option>' + greetings.join( '</option><option>' ) + '</option>';
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'meter':
			element = document.createElement( 'meter' );
			element.setAttribute( 'min', '0' );
			element.setAttribute( 'max', '100' );
			element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'text':
		default:
			element = document.createElement( 'input' );
			element.setAttribute( 'type', 'text' );
			element.setAttribute( 'value', greeting );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
	}

	element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

// 让它下雪
for( var i = 0; i < 200; i++ ) {
	let element = document.createElement( 'input' );
	element.setAttribute( 'type', 'radio' );

	let spread = window.innerWidth/2;

	let x = Math.round( Math.random() * spread ) - ( spread / 4 ),
		y = Math.round( Math.random() * height ),
		z = Math.round( Math.random() * spread ) - ( spread / 2 );

	let rx = 0,
		ry = Math.random() * 360,
		rz = 0;

	if( Math.random() > 0.5 ) element.setAttribute( 'checked', '' );

	element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

function resize() {
	tree.style.top = ( ( window.innerHeight - height - 100 ) / 2 ) + 'px';
}

resize();
