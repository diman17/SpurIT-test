const button = document.querySelector('.collapsible__button');
const buttonTextOnVisibleContent = button.querySelector('.collapsible__action--visible');
const buttonTextOnHiddenContent = button.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

buttonTextOnHiddenContent.hidden = true;

const contentKeyframeEffects = [
    { transform: 'translateY(-40px)', opacity: '0', visibility: 'hidden' },
    { transform: 'translateY(-20px)', opacity: '0', visibility: 'visible' },
    { transform: 'translateY(-10px)', opacity: '1', visibility: 'visible' },
    { transform: 'translateY(0px)', opacity: '1', visibility: 'visible'},
];

const contentAnimationProperties = {
    duration: 300,
    easing: 'linear',
    iterations: 1,
    fill: 'forwards',
};

button.addEventListener('click', () => {
    if (buttonTextOnVisibleContent.hidden) {
        content.animate(contentKeyframeEffects, contentAnimationProperties);
        
        buttonTextOnVisibleContent.hidden = false;
        buttonTextOnHiddenContent.hidden = true;
    } else {
        content.animate(contentKeyframeEffects.reverse(), contentAnimationProperties);

        buttonTextOnVisibleContent.hidden = true;
        buttonTextOnHiddenContent.hidden = false;

        contentKeyframeEffects.reverse();
    }
})
