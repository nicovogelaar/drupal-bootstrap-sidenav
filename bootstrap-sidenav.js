(function ($) {

  var my = {
    init: function () {
      this.bindClickEventOnSidenavToggle();
      this.bindClickEventOnSidenav();
      this.bindClickEventToCloseSidenav();
    },

    bindClickEventOnSidenavToggle: function () {
      $(document).on('click', '[data-toggle="sidenav"]', this.updateSidenav);
    },

    bindClickEventOnSidenav: function (event) {
      $(document).on('click', '.sidenav-active .region-sidebar-first, \
        .sidenav-active .region-sidebar-second', function (event) {
        event.stopPropagation();
      });
    },

    bindClickEventToCloseSidenav: function () {
      $(document).on('click', 'body.sidenav-active', function () {
        my.closeSidenav();
      });
    },

    openSidenav: function () {
      $('body').addClass('sidenav-active');

      if ($('.sidenav-overlay').length < 1) {
        $('body').append('<div class="sidenav-overlay"></div>');
      }
    },

    closeSidenav: function () {
      $('body').removeClass('sidenav-active');
    },

    updateSidenav: function () {
      var sidebar;

      if ($('body.sidenav-sidebar-first').length > 0) {
        sidebar = $('.region-sidebar-first');
      } else if ($('body.sidenav-sidebar-second').length > 0) {
        sidebar = $('.region-sidebar-second');
      }

      var active = $('body').hasClass('sidenav-active');

      if (active) {
        my.closeSidenav();
      } else {
        my.openSidenav();
      }
    }
  };

  my.init();

}(jQuery));