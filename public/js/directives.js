angular.module('angularApp').
        directive('tabs', function() {
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                controller: ["$scope", function($scope) {
                        var panes = $scope.panes = [];

                        $scope.select = function(pane) {
                            angular.forEach(panes, function(pane) {
                                pane.selected = false;
                            });
                            pane.selected = true;
                        }

                        this.addPane = function(pane) {
                            if (panes.length == 0)
                                $scope.select(pane);
                            panes.push(pane);
                        }
                    }],
                    template:
                            '<div class="nav_holder">' +
                            '<ul class="nav nav-tabs">' +
                            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                            '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                            '</li>' +
                            '</ul>' +
                            '<div class="tab-content" ng-transclude></div>' +
                            '</div>',
                    replace: true
                };
            }).
        directive('pane', function() {
            return {
                require: '^tabs',
                restrict: 'E',
                transclude: true,
                scope: {title: '@'},
                link: function(scope, element, attrs, tabsCtrl) {
                    tabsCtrl.addPane(scope);
                },
                template:
                        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
                        '</div>',
                replace: true
            };
         }).
         directive('chart', function(){
            return{
                restrict: 'E',
                link: function(scope, elem, attrs) {
                    //var data = scope[attrs.ngModel];
                    var chart = null,
                        opts  = {series: {
                                pie: { 
                                    show: true
                                }
                            } };
                        scope.$watch(attrs.ngModel, function(v){
                                
                                if(!chart){
                                    chart = $.plot(elem, v , opts);
                                    //elem.show();
                                    
                                }else{
                                    chart = $.plot(elem, v , opts);
                                    //chart.setData(v);
                                    //chart.setupGrid();
                                    //chart.draw();
                                    
                                }
                            });
                }
                };
        });
