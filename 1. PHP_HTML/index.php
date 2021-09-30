<?php
    class StudentInfo extends ArrayObject {
        public function __set($key, $value) {
            $this[$key] = $value;
        }

        public function displayAsTable() {
            $table =  '<table>';
            $table .= '<thead>';
            $all_data = (array) $this;
            foreach ($all_data as $key => $value) {
                $table .= '<th>' . $key . '</th>';
            }   
            
            $table .= '</thead>';
            $table .= '<tbody>';    
            
            foreach ($all_data as $key => $value) {
                $table .= '<td>' . $value . '</td>';
            }    
            $table .= '</tbody>';
            $table .=  '</table>';    
            return $table;
        } 
    }

    $student = new StudentInfo();    
    $student->Name = 'Maruf'; 
    $student->Age = '27'; 
    $student->Gender = 'Male'; 
    $student->Religion = 'Islam';

    echo $student->displayAsTable(); 
?>