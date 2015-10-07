<?
	function dbg($someVar) {
		print '<pre>';
		print_r($someVar);
		print '</pre>';
		}
	class person {
		var $name, $surname;

		function hello(){
			print "Nice to see you";
			}
		function goodBye(){
			return "Nice to see you";
			}
	}
	$myFriend = new person();

	$myFriend->name    = "Jack";
	$myFriend->surname = "Smith";

	$people = array(
		 'jack' =>'Brooklyn road, 213'
		,'john' =>'Interstate road, 60'
		);

	$items_list = array(
	 23 => array('no' => 2456, 'label' => 'Salad')
	,96 => array('no' => 4889, 'label' => 'Cream')
	);
include('page.html');
?>

