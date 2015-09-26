
angular.module('loader')
    .run(function ($rootScope, $location) {
        $rootScope.getCurrentPath = function () {
            return $location.path();
        };

        $rootScope.topLinks = [
            {
                title: 'News',
                url: 'news'
            },
            {
                title: 'Downloads',
                url: 'dl'
            },
            {
                title: 'Contacts',
                url: 'contacts'
            },
            {
                title: 'Settings',
                url: 'settings'
            }
        ];

        $rootScope.sidebar = [
            {
                title: 'General',
                items: [
                    {
                        title: 'New Releases',
                        url: 'general/new-releases'
                    },
                    {
                        title: 'Work In Progress',
                        url: 'general/work'
                    },
                    {
                        title: 'Most Popular',
                        url: 'general/popular'
                    }
                ]
            },
            {
                title: 'Categories',
                items: [
                    {
                        title: 'Cars',
                        url: 'category/cars'
                    },
                    {
                        title: 'Map',
                        url: 'category/map'
                    },
                    {
                        title: 'Textures',
                        url: 'category/txd'
                    },
                    {
                        title: 'Guns',
                        url: 'category/guns'
                    },
                    {
                        title: 'Music',
                        url: 'category/music'
                    }
                ]
            }
        ];

        $rootScope.debug = function() {
            debugger;
        }
    });