const all = document.querySelectorAll("*");

for(const element of all) {
    (element as HTMLElement).style.backgroundColor = "#111111";
    (element as HTMLElement).style.color = "#FFF";
}