var headerItens = $('ul:eq(1)').find('a')
var menu = $('#menu')
var sidebar = $('#sidebar')

headerItens.on('mouseover', function () {
    if (headerItens.hasClass('text-main')) {
        headerItens.removeClass('text-main')
        headerItens.addClass('text-font')
    }

    moveHeaderBar(this)
})

menu.on('click', () => {
    toggleSidebar(sidebar)
})

$(window).on('resize', function () {
    moveHeaderBar()
})
