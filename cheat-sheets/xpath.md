# Вибір елементів за тегом:

- `//tagname` - вибір всіх елементів з вказаним тегом, незалежно від їхнього положення в документі.

**Приклад:**

- `//span` - знайде всі span елементи

---

# Вибір елементів за шляхом:

`/path/to/element` - вибір елементів за точним шляхом до них від кореня документа.
`./path/to/element` - вибір елементів за шляхом від поточного контексту.

**Приклад:**

- `//*[@id="root"]/div/section` - знайде елемент section

**Рекомендація:**

- за можливістю використовуйте абсолютні шляхи `//*[@id="root"]//section`

---

# Вибір елементів за атрибутами:

- `//*[@attribute='value']` - вибір всіх елементів з вказаним атрибутом та значенням.
- `//tagname[@attribute='value']` - вибір елементів з вказаним тегом та атрибутом зі значенням.

**Приклад:**

- `//*[@data-testid='selection']/span[@data-testid='remove']`

---

# Використання операторів порівняння:

- `[@attribute='value']` - вибір елементів з атрибутом, що має точне значення.
- `[@attribute!='value']` - вибір елементів з атрибутом, що не має заданого значення.
- `[contains(@attribute, 'value')]` - вибір елементів, у яких атрибут містить задане значення.

**Приклад:**

- `//*[@data-testid='selection']`
- `//p[text() != 'Ukrainian dictionary extension for VS Code.' ]`
- `//*[contains(@class, 'dropdown-menu')]`

---

# Використання логічних операторів:

- `and`, `or`, `not` - логічні оператори для комбінування умов.

**Приклад:**

- `//input[@type = 'checkbox' and @value = 'on']`
- `//*[@title='Annotate' or text()='Annotate']`

---

# Вибір елементів за позицією:

- `(//tagname)[n]` - вибір елемента з певною позицією у результаті запиту (де n - номер позиції).

**Приклад:**

- `(//*[@data-testid='wow-senpai']//*[text()='qa'])[1]`

---

# Навігація по DOM дереву по осям

- `ancestor::`
- `parent::`
- `following-sibling::`
- `preceding-sibling::`

**Приклади:**

- `//*[text() = 'qa']/ancestor::node()[3]//input`
- `//*[text()='senapao']/parent::ul`
- `//h3[text()='qa senpai']/following-sibling::button[text()='awesome subscriber']`
- `//*[text()='qa семпай']//preceding-sibling::span`

---
