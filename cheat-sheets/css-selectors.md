# CSS Selectors cheat sheet

## Вибір за тегом:

- `tagname` - вибір всіх елементів з вказаним тегом. Наприклад: `button`

## Вибір за класом:

- `.class` - вибір всіх елементів з вказаним класом. Наприклад: `.this-is-class`
- `#id` - вибір елемента з вказаним ідентифікатором. Наприклад: `#react-page`

## Вибір за атрибутами:

- `[attribute]` - вибір елементів, які мають вказаний атрибут. Наприклад: `[data-testid]`
- `[attribute='value']` - вибір елементів з вказаним атрибутом і значенням. Наприклад: `[data-testid = ‘save’]`
- `[attribute~='value']` - вибір елементів, у яких атрибут містить задане значення як одне зі слова. Наприклад: `[class~="content290"]`
- `[attribute^='value']` - вибір елементів, у яких атрибут починається з заданого значення. Наприклад: `[class~="MuiBox-root-1"]`
- `[attribute$='value']` - вибір елементів, у яких атрибут закінчується на задане значення. Наприклад: `[class $= "button"]`
- `[attribute*='value']` - вибір елементів, у яких атрибут містить задане значення у будь-якому місці. Наприклад: `[class*="-columnFlex1"]`

## Комбіновані способи

- `tag[attribute]`
- `[attribute][attribute]` - вибір елемента який має обидва атрибути. Наприклад: `[data-testid][data-for]...`
- `elementA elementB` - вибір елементів B, які знаходяться всередині елементів A. Наприклад: `h4 button`
- `elementA > elementB` - вибір елементів B, які є прямими нащадками елементів A. Наприклад: `h4 > div`
- `elementA + elementB` - вибір елементів B, які мають непосредственного попередника A. Наприклад: `button + button`
