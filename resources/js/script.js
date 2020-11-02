$( function () {
    // Sticky navigation 
    $( ".js__section_features" ).waypoint( function ( direction ) {
        if ( direction == 'down' ) {
            $( 'nav' ).addClass( 'sticky' );
        } else {
            $( 'nav' ).removeClass( 'sticky' );
        }

    }, {
        offset: '60px'
    } )

    //Scroll on buttons 

    $( '.js_scroll_to_plans' ).click( function () {
        $( 'html,body' ).animate( { scrollTop: $( '.js_section_plans' ).offset().top }, 1000 )

    } )

    $( '.js_scroll_to_start' ).click( function () {
        $( 'html,body' ).animate( { scrollTop: $( '.js__section_features' ).offset().top }, 1000 )

    } )

    //Scroll links 

    $( 'a[href*="#"]' )
        // Remove links that don't actually link to anything
        .not( '[href="#"]' )
        .not( '[href="#0"]' )
        .click( function ( event ) {
            // On-page links
            if (
                location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' )
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $( this.hash );
                target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
                // Does a scroll target exist?
                if ( target.length ) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $( 'html, body' ).animate( {
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $( target );
                        $target.focus();
                        if ( $target.is( ":focus" ) ) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    } );
                }
            }
        } );

    /** Animations on scroll */

    $( ".js_wp_1" ).waypoint( function ( direction ) {

        $( ".js_wp_1" ).addClass( 'animate__animated animate__fadeIn' );
    }, {
        offset: '50%'
    } )

    $( ".js_wp_2" ).waypoint( function ( direction ) {

        $( ".js_wp_2" ).addClass( 'animate__animated animate__fadeInUp' );
    }, {
        offset: '50%'
    } )

    $( ".js_wp_3" ).waypoint( function ( direction ) {

        $( ".js_wp_3" ).addClass( 'animate__animated animate__fadeIn' );
    }, {
        offset: '50%'
    } )

    $( ".js_wp_4" ).waypoint( function ( direction ) {

        $( ".js_wp_4" ).addClass( 'animate__animated  animate__bounceIn' );
    }, {
        offset: '50%'
    } )

    //Mobile Navigation 
    $( '.js_mobile_nav_icon' ).click( function () {
        const mainNav = $( '.js_main_nav' );
        mainNav.slideToggle( 200 );

    } )

} )


