


const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(item => {

    const letters = item.children[0].textContent.split('');
    item.innerHTML = "";

    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay: ${0.07 * index}s">${el}</span>`
    })
})



(function(w,d,undefined){
 
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],
		header = d.getElementById('header'),
		menuIsStuck = function() {


			var wScrollTop	= w.pageYOffset || el_body.scrollTop,
				regexp		= /(nav\-is\-stuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= 600;
 
			// si le scroll est d'au moins 600 et
			// la class nav-is-stuck n'existe pas sur HTML
			if ( wScrollTop > scrollValue && !classFound ) {
				el_html.className = el_html.className + ' nav-is-stuck';
				el_body.style.paddingTop = navHeight + 'px';
			}
 
			// si le scroll est inférieur à 2 et
			// la class nav-is-stuck existe
			if ( wScrollTop < 2 && classFound ) {
				el_html.className = el_html.className.replace( regexp, '' );
				el_body.style.paddingTop = '0';
			}

		},
		onScrolling = function() {
			// on exécute notre fonction menuIsStuck()
			// dans la fonction onScrolling()
			menuIsStuck();
			// on pourrait faire plein d'autres choses ici 
		};
 
	// quand on scroll
	w.addEventListener('scroll', function(){
		// on exécute la fonction onScrolling()
		w.requestAnimationFrame( onScrolling );
	});
 
}(window, document));