angular.module('RegionApp').run(['$templateCache', function($templateCache)
 {
     <!-- Template for main & navigation bar -->
                $templateCache.put('branch_list/branch_list.html',   require('./branch_list/branch_list.html'));
                $templateCache.put('navigation_template.html', require('./navigation_template.html'));
                $templateCache.put('footer_template.html',   require('./footer_template.html'));
            
 }]);
