#!/bin/bash

val=5

# On supprime tous les rapport css pouvant être présent

    # rm  -f lintcss_*.out
    rm  -f lintcss.out

    touch lintcss.out #Fichier de rapport associé au badge


# Pour chaque fichier css on check
for i in *.css; do 
    npx csslint-cli "$i" >> "lintcss_$i-report.out"
done 

#S'il y a eu une erreur on renvoie 1 en sortie
for i in lintcss_*.out; do
    if grep "ERR" "$i" > /dev/null; then  
        val=10
        echo "Error in file $i" >> lintcss.out
        break
    fi
    if grep "WARN" "$i" > /dev/null; then
        echo "Warning in file $i" >>lintcss.out
    fi
done


#S'il n'y a pas eu d'érreur on renvoie 0 en sortie
if [ "$val" -eq 5 ]; then 
    echo 0
else 
    echo 1
fi
