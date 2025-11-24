<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP- buoi 1</title>
</head>
<body>
    <?php 
        //1. cú pháp in ra màn hình
        echo "helloword! <br>";
        echo "PHP <br>";
        // 2. Biến trong PHP
        $name = "VU HUU TUAN";
        $age = 20;
        echo "xin chào " . $name  . " " .$age . " tuổi"."<br>";
        // 3.Hằng số 
        //  hằng số và biến số giống nhau là lưu trữ giá trị 
        //  hằng số ko thể thay đổi được 
        // Còn biến ko thể thay đổi được
        define ("soPi","3,14");
        echo soPi."<br>";
        define("ten","Tuan");
        echo ten."<br>";
        // 4. phân biệt '' và ""
        echo '$name' ."<br>";
        echo "$name" ."<br>";
        // 5.Kiem  tra độ dài cùa chuỗi : tính cả dấu 
        echo strlen($name) ."<br>";
        // 5.2 Đếm số từ trong : ĐẾM CẢ DẤU
        echo str_word_count($name) ."<br>";
        // 5.3 Tìm kiếm ký tự trong chuõi:
        echo strpos($name,"A") ."<br>";
        // 5.4 thay thế ký tự trong chuỗi
        echo str_replace("TUAN","Tuấn",$name) ."<br>";
        // Toán tử 
        $so_1=10;
        $so_2=8;
        // echo $so_1 %= $so_2;
        // so sánh >,<,>++=,<=,!=
        // Câu điều kiện trong php
        // if("điều kiên){
        //  

        // $tong=$so_1+$so_2;
        // // kiểm tra tổng của số thứ nhất và số thứ 2 nếu <25 thì hiển tổng là ... nhỏ hơn 15 
        // // Nếu =15 thì hiển thị tổng là 15
        // // Nếu 15 thì hiển thị tổng là .. lơn hơn 15
        // if($tong==15){
        //     echo "tổng là " .$tong 
        // }elseif($tong<15){
        //     echo "tổng là:".$tong."nhỏ hơn 15"
        // }else{
        //     echo "tổng là:".$tong."lớn hơn 15"
        // }
        // 8. swith case:
            $color ="red";
            switch ($color){
                case"red":
                    echo "is red";
                    break;
                case"blue":
                    echo"is blue";
                    break;
                default:
                    echo "no color";
                    break;
                
            }
        // 9. for
        for($i=0;$i<100;$i++){
            echo $i ."<br>";
        }
        
    ?>
</body>
</html>