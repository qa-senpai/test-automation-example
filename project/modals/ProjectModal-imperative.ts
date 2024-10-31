import { Page, Locator } from "@playwright/test";

export class ProjectModal {
  private projectRequestor: Locator;
  private projectName: Locator;
  private description: Locator;
  private requestedDeliveryDate: Locator;
  private nestleAssetOwnerOrganization: Locator;
  private businessUnit: Locator;
  private corporateBrand: Locator;
  private masterBrand: Locator;
  private productBrand: Locator;
  private denominator: Locator;

  private assetOwner: Locator;
  private assetApprover: Locator;
  private costApprovalDropdown: Locator;
  private nestleCostApprover: Locator;
  private companyCode: Locator;

  private translationRequiredCheckbox: Locator;
  private translationLanguages: Locator;
  private translationTone: Locator;
  private translationAction: Locator;
  private translationText: Locator;

  private saveButton: Locator;
  private cancelButton: Locator;

  constructor(private page: Page) {
    this.projectRequestor = this.page.locator('input[name="projectRequestor"]');
    this.projectName = this.page.locator('input[name="projectName"]');
    this.description = this.page.locator('textarea[name="description"]');
    this.requestedDeliveryDate = this.page.locator(
      'input[name="deliveryDate"]'
    );
    this.nestleAssetOwnerOrganization = this.page.locator(
      'input[name="assetOwnerOrganization"]'
    );
    this.businessUnit = this.page.locator('input[name="businessUnit"]');
    this.corporateBrand = this.page.locator('input[name="corporateBrand"]');
    this.masterBrand = this.page.locator('input[name="masterBrand"]');
    this.productBrand = this.page.locator('input[name="productBrand"]');
    this.denominator = this.page.locator('input[name="denominator"]');

    this.assetOwner = this.page.locator('input[name="assetOwner"]');
    this.assetApprover = this.page.locator('input[name="assetApprover"]');
    this.costApprovalDropdown = this.page.locator(
      'select[name="costApproval"]'
    );
    this.nestleCostApprover = this.page.locator('input[name="costApprover"]');
    this.companyCode = this.page.locator('input[name="companyCode"]');

    this.translationRequiredCheckbox = this.page.locator(
      'input[name="translationRequired"]'
    );
    this.translationLanguages = this.page.locator(
      'input[name="translationLanguages"]'
    );
    this.translationTone = this.page.locator('input[name="translationTone"]');
    this.translationAction = this.page.locator(
      'input[name="translationAction"]'
    );
    this.translationText = this.page.locator(
      'textarea[name="translationText"]'
    );

    this.saveButton = this.page.locator('button:has-text("Save")');
    this.cancelButton = this.page.locator('button:has-text("Cancel")');
  }

  // Методи для заповнення лівої частини форми
  async fillProjectRequestor(requestor: string): Promise<void> {
    await this.projectRequestor.fill(requestor);
  }

  async fillProjectName(name: string): Promise<void> {
    await this.projectName.fill(name);
  }

  async fillDescription(descriptionText: string): Promise<void> {
    await this.description.fill(descriptionText);
  }

  async selectDeliveryDate(date: string): Promise<void> {
    await this.requestedDeliveryDate.fill(date);
  }

  async fillNestleAssetOwnerOrganization(org: string): Promise<void> {
    await this.nestleAssetOwnerOrganization.fill(org);
  }

  async fillBusinessUnit(businessUnit: string): Promise<void> {
    await this.businessUnit.fill(businessUnit);
  }

  async fillCorporateBrand(brand: string): Promise<void> {
    await this.corporateBrand.fill(brand);
  }

  async fillMasterBrand(masterBrand: string): Promise<void> {
    await this.masterBrand.fill(masterBrand);
  }

  async fillProductBrand(productBrand: string): Promise<void> {
    await this.productBrand.fill(productBrand);
  }

  async fillDenominator(denominator: string): Promise<void> {
    await this.denominator.fill(denominator);
  }

  // Методи для заповнення правої частини форми
  async fillAssetOwner(assetOwner: string): Promise<void> {
    await this.assetOwner.fill(assetOwner);
  }

  async fillAssetApprover(assetApprover: string): Promise<void> {
    await this.assetApprover.fill(assetApprover);
  }

  async selectCostApproval(option: string): Promise<void> {
    await this.costApprovalDropdown.selectOption(option);
  }

  async fillNestleCostApprover(costApprover: string): Promise<void> {
    await this.nestleCostApprover.fill(costApprover);
  }

  async fillCompanyCode(companyCode: string): Promise<void> {
    await this.companyCode.fill(companyCode);
  }

  // Методи для секції "Translation"
  async toggleTranslationRequired(): Promise<void> {
    await this.translationRequiredCheckbox.click();
  }

  async fillTranslationLanguages(languages: string): Promise<void> {
    await this.translationLanguages.fill(languages);
  }

  async fillTranslationTone(tone: string): Promise<void> {
    await this.translationTone.fill(tone);
  }

  async fillTranslationAction(action: string): Promise<void> {
    await this.translationAction.fill(action);
  }

  async fillTranslationText(text: string): Promise<void> {
    await this.translationText.fill(text);
  }

  // Методи для взаємодії з кнопками
  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
