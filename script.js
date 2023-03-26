var continueListRemoveUtil = function() {
    var continueWatchingElementList = document.querySelectorAll('[data-list-context="continueWatching"] .sliderContent.row-with-x-columns div.slider-item');
    var continueWatchingElementListLength = continueWatchingElementList.length;
    console.log("Total items in remove list " + continueWatchingElementListLength);
    var removeFromStartingItem = 0;
    var setTimeoutCount = 0;
    for (i = removeFromStartingItem; i < continueWatchingElementListLength; i++) {
        setTimeout(function () {
            setTimeoutCount++;
            //var continueWatchingElementToRemoveHrefTag = continueWatchingElementList.item(i).querySelector('a');
            var continueWatchingElementToRemoveHrefTag = document.querySelector('[data-list-context="continueWatching"] .sliderContent.row-with-x-columns div.slider-item a');
            console.log("Removing continue item \n");
            console.log(continueWatchingElementToRemoveHrefTag);
            var mouseoverEvent = new MouseEvent('mouseover', { 'view': window, 'bubbles': true, 'cancelable': true });
            continueWatchingElementToRemoveHrefTag.dispatchEvent(mouseoverEvent);
            console.log('calling mouse over event');
            var timeoutBetweenClick = 1000; // millis
            setTimeout(() => {
                console.log('clicking on remove button');
                document.querySelector('[data-uia="remove-in-bob-button"]').click();
                setTimeout(() => {
                    console.log('clicking on clean up button');
                    document.querySelector('[data-uia="cleaning-up"]').click();
                }, timeoutBetweenClick);
            }, timeoutBetweenClick);
            console.log("setTimeoutCount = " + setTimeoutCount + "and continueWatchingElementListLength = " + continueWatchingElementListLength);
            // todo: need more testing
            if (setTimeoutCount == (continueWatchingElementListLength-1)) {
                console.log("can now call recursive function");
                var continueWatchingElementList = document.querySelectorAll('[data-list-context="continueWatching"] .sliderContent.row-with-x-columns div.slider-item');
                var continueWatchingElementListLength = continueWatchingElementList.length;
                console.log("continueWatchingElementListLength = " + continueWatchingElementListLength);
            }
        }, (i+1) * 5000)
    }
}
continueListRemoveUtil();