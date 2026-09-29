# React Internal Working :

passport website -vibe coded


React ---->Taect fast hain....


HTML --- dom      -------               (position,size kha pe)       (har ek pixel ke andar konsa color cal ,kaisa dikhega pixel)
                          render tree  -->layout   ---------->Repaint -->composite(final UI)
CSS--- cssom tree --------                (Reflow)
                                            

reflow and repaint  --> havy operation




# what is diff bet react and row js:

 react->light wight object

  

# user->React-->ReactDom--->Real Dom


# React duplicate copy 

# compare two object

# changes detect ->document ->  copy


# real dom ka copy react ne apne pass rakha->called Virtual Dom


# react  light weight copy banata hain..
 
     (Real Dom)
        main
         |
        app
         |
h1  h2 increment  decrement
       counter:0

          |
         check
          |

        (copy)
         main
         |
         app
         |
  h1    h2   increment   decrement 
      counter:1         


# key :

*position wise compare hoga...*

## Example:
1.orange--->mango
2.apple-->orange
3.banana->apple
4.new element create karo,uske andar banana dalo

using key:
1.new element karo,jiski 