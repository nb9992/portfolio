new fullpage('#fullpage', {
    anchors:['s1', 's2', 's3', 's4'],
    menu:'.gnb_list',
    scrollHorizontally:true,
    autoScrolling:true,
    navigation:true,
    navigationPosition:'right',
    navigationTooltips:['INTRO', 'PROFILE', 'PROJECT', 'CONTACT'],
    easing:'easeInOutcubic',
});

new WOW().init();