import random
count = 0
  
while (count <= 100 ) :
   n= input( " press r to roll a dice " )

   if n=='r':
        r=( random.randint(1, 6))
        count = count + r
        print (" ur random numb ",r)
        print (" ur  count is ", count )

   if count == 8 :
        count= 37
        print ( " wow !!!", count )

   if count ==11 :
        count = 2
        print ("sorry snakes got u ")    

   if count == 13 :
        count= 34
        print ( " wow !!!", count )

   if count ==25 :
        count = 4
        print (" sorry snakes got u " )           

    
   if count ==38 :
        count = 9
        print ("sorry snakes got u " )

   if count == 40 :
        count= 68
        print ( " wow !!!", count )

   if count == 52 :
        count= 81
        print ( " wow !!!", count )

   if  count ==65 :
        count = 46
        print (" sorry snakes got u " )

   if   count == 76 :
        count= 97
        print ( " wow !!!", count )          

   if   count == 89 :
        count = 70
        print (" sorry snakes got u " )   

   if   count == 93 :
        count= 64
        print ( " the snake got u !!!", count )

   if count + r == 100 :
      print (" u won the game " )
      

   #if count == 100 :
               #print( " u have won the game ")

           
               


    
