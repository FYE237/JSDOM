#!/bin/bash

val=5

# On supprime tous les rapport css pouvant être présent

    rm  -f lintcss_*.out


# Pour chaque fichier css on check
for i in *.css; do 
    npx csslint-cli "$i" >> "lintcss_$i-report.out"
done 

#S'il y a eu une erreur on renvoie 1 en sortie
for i in lintcss_*.out; do
    if grep "ERR" "$i" > /dev/null; then  
        val=10
        echo 1
        break
    fi
done


#S'il n'y a pas eu d'érreur on renvoie 0 en sortie
if [ "$val" -eq 5 ]; then 
    echo 0
fi
