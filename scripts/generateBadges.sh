#!/bin/bash

#Badge HTML
NBERR_HTML=0
NBWARN_HTML=0

for file  in *.html*.out ; do
   errors=$(grep -o "[0-9]* errors" "$file" |cut -d ' ' -f 1)
   warn=$(grep -c "WARN" "$file")
   NBERR_HTML=$((NBERR_HTML + errors))
   NBWARN_HTML=$((NBWARN_HTML + warn))

done

color="green"
if [[ $NBERR_HTML > 0 ]]
then 
  color="red"
  else if [[ $NBWARN_HTML > 0 ]]
  then 
    color="orange"
  fi
fi
anybadge -o -l "linthtml" -v "$NBERR_HTML $NBWARN_HTML" -c "$color" -f "linthtml.svg"

#Badge CSS
NBERR_css=0
NBWARN_css=0

for file  in *.css*.out ; do
   errors=$(grep -c "ERR" "$file")
   warn=$(grep -c "WARN" "$file")
   NBERR_css=$((NBERR_css + errors))
   NBWARN_css=$((NBWARN_css + warn))

done

color_css="green"
if [[ $NBERR_css > 0 ]]
then 
  color_css="red"
  else if [[ $NBWARN_css > 0 ]]
  then 
    color_css="orange"
  fi
fi
anybadge -o -l "lintcss" -v "$NBERR_css $NBWARN_css" -c "$color_css" -f "lintcss.svg"


#Badge JS
NBERR_js=0
NBWARN_js=0
for file  in *.js*.out ; do
   errors=$(grep -E "[0-9]* error(s)" "$file" |cut -d ' ' -f 1)
   warn=$(grep -E "[0-9]* warning(s)" "$file" |cut -d ' ' -f 1)
   NBERR_js=$((NBERR_js + errors))
   NBWARN_js=$((NBWARN_js + warn))

done

color_js="green"
if [[ $NBERR_js > 0 ]]
then 
  color_js="red"
else if [[ $NBWARN_js > 0 ]]
  then 
    color_js="orange"
  fi
fi
anybadge -o -l "lintjs" -v "$NBERR_js $NBWARN_js" -c "$color_js" -f "lintjs.svg"
