function removeSelectedOption() {
    
    let dropdown = document.getElementById("myDropdown");
    
    let selectedIndex = dropdown.selectedIndex;
    
    if (selectedIndex !== -1) {
          dropdown.remove(selectedIndex);
    }
}