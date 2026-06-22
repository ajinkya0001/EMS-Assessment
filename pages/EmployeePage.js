export class EmployeePage {

    constructor(page) {

        this.page = page;

        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('Email');

        this.addBtn = page.getByRole('button', { name: 'Add' });

        this.editBtn = page.getByRole('button', { name: 'Edit' }).first();

        this.deleteBtn = page.getByRole('button', { name: 'Delete' }).first();
    }

    async addEmployee(firstname, lastname, email) {

        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.email.fill(email);

        await this.addBtn.click();
    }

    async editEmployee(updatedName) {

        await this.editBtn.click();

        await this.firstName.clear();

        await this.firstName.fill(updatedName);

        await this.page.getByRole('button', { name: 'Update' }).click();
    }

    async deleteEmployee() {

        this.page.once('dialog', dialog => dialog.accept());

        await this.deleteBtn.click();
    }
}