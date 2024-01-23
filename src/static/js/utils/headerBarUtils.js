var lastElement = ''
var bar = $('#bar')

const moveHeaderBar = (elementSelector) => {
    if (elementSelector != undefined) {
        var element = $(elementSelector)

        // offset().left captures the Left coordinate of the element
        var elementPosition = elementSelector.offsetLeft
        // width() captures the width of the element
        var elementWidth = element.width()

        element.removeClass('text-font')
        element.addClass('text-main')

        bar.css('left', elementPosition - 25 + 'px')
        bar.css('width', elementWidth + 50 + 'px')
        bar.css('opacity', 1)

        lastElement = elementSelector
    } else {
        var element = $(lastElement)
        var elementPosition = lastElement.offsetLeft
        var elementWidth = element.width()

        bar.css('left', elementPosition - 15 + 'px')
        bar.css('width', elementWidth + 30 + 'px')
    }
}

const toggleSidebar = (sidebarSelector) => {
    var sidebar = $(sidebarSelector)

    if (sidebar.hasClass('-left-full')) {
        sidebar.removeClass('-left-full')
        sidebar.addClass('-left-0')
    } else {
        sidebar.removeClass('-left-0')
        sidebar.addClass('-left-full')
    }
}
