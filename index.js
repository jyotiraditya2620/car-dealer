document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const model = document.getElementById('model').value;
        console.log(`Filtering by model: ${model}`);
        // Implement filtering logic here
    });

    document.querySelectorAll('.mark-quotation').forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.cells[4].innerText = 'Quotation Provided';
            button.disabled = true;
        });
    });
});
