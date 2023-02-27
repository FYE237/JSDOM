#!/bin/bash

val=5

# On supprime tous les rapport html pouvant être présent

    rm  -f linthtml*.out

    # rm -f linthtml.out

    touch linthtml.out

# Pour chaque fichier html on check
for i in *.html; do 
    npx htmlhint "$i" >> "linthtml_$i-report.out"
done 

# S'il y a eu une erreur on renvoie 1 en sortie
for i in linthtml_*.out; do
    if grep -q "found [0-9]* errors in [0-9]* files" "$i"; then  
        val=10
        echo "Error in file $i" >> linthtml.out
        #break
    fi
done

# S'il n'y a pas eu d'erreur on renvoie 0 en sortie
if [ "$val" -eq 5 ]; then 
    echo 0
else 
    echo 1
fi
