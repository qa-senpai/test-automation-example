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
    // Локатори для лівої частини
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

    // Локатори для правої частини
    this.assetOwner = this.page.locator('input[name="assetOwner"]');
    this.assetApprover = this.page.locator('input[name="assetApprover"]');
    this.costApprovalDropdown = this.page.locator(
      'select[name="costApproval"]'
    );
    this.nestleCostApprover = this.page.locator('input[name="costApprover"]');
    this.companyCode = this.page.locator('input[name="companyCode"]');

    // Translation section
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

  private async fillProjectRequestor(requestor: string): Promise<void> {
    await this.projectRequestor.fill(requestor);
  }

  private async fillProjectName(name: string): Promise<void> {
    await this.projectName.fill(name);
  }

  private async fillDescription(descriptionText: string): Promise<void> {
    await this.description.fill(descriptionText);
  }

  private async selectDeliveryDate(date: string): Promise<void> {
    await this.requestedDeliveryDate.fill(date);
  }

  private async fillNestleAssetOwnerOrganization(org: string): Promise<void> {
    await this.nestleAssetOwnerOrganization.fill(org);
  }

  private async fillBusinessUnit(businessUnit: string): Promise<void> {
    await this.businessUnit.fill(businessUnit);
  }

  private async fillCorporateBrand(brand: string): Promise<void> {
    await this.corporateBrand.fill(brand);
  }

  private async fillMasterBrand(masterBrand: string): Promise<void> {
    await this.masterBrand.fill(masterBrand);
  }

  private async fillProductBrand(productBrand: string): Promise<void> {
    await this.productBrand.fill(productBrand);
  }

  private async fillDenominator(denominator: string): Promise<void> {
    await this.denominator.fill(denominator);
  }

  private async fillAssetOwner(assetOwner: string): Promise<void> {
    await this.assetOwner.fill(assetOwner);
  }

  private async fillAssetApprover(assetApprover: string): Promise<void> {
    await this.assetApprover.fill(assetApprover);
  }

  private async selectCostApproval(option: string): Promise<void> {
    await this.costApprovalDropdown.selectOption(option);
  }

  private async fillNestleCostApprover(costApprover: string): Promise<void> {
    await this.nestleCostApprover.fill(costApprover);
  }

  private async fillCompanyCode(companyCode: string): Promise<void> {
    await this.companyCode.fill(companyCode);
  }

  private async toggleTranslationRequired(): Promise<void> {
    await this.translationRequiredCheckbox.click();
  }

  private async fillTranslationLanguages(languages: string): Promise<void> {
    await this.translationLanguages.fill(languages);
  }

  private async fillTranslationTone(tone: string): Promise<void> {
    await this.translationTone.fill(tone);
  }

  private async fillTranslationAction(action: string): Promise<void> {
    await this.translationAction.fill(action);
  }

  private async fillTranslationText(text: string): Promise<void> {
    await this.translationText.fill(text);
  }

  public async fillForm(data: ProjectFormData): Promise<void> {
    if (data.projectRequestor) {
      await this.fillProjectRequestor(data.projectRequestor);
    }
    if (data.projectName) {
      await this.fillProjectName(data.projectName);
    }
    if (data.description) {
      await this.fillDescription(data.description);
    }
    if (data.deliveryDate) {
      await this.selectDeliveryDate(data.deliveryDate);
    }
    if (data.nestleAssetOwnerOrganization) {
      await this.fillNestleAssetOwnerOrganization(
        data.nestleAssetOwnerOrganization
      );
    }
    if (data.businessUnit) {
      await this.fillBusinessUnit(data.businessUnit);
    }
    if (data.corporateBrand) {
      await this.fillCorporateBrand(data.corporateBrand);
    }
    if (data.masterBrand) {
      await this.fillMasterBrand(data.masterBrand);
    }
    if (data.productBrand) {
      await this.fillProductBrand(data.productBrand);
    }
    if (data.denominator) {
      await this.fillDenominator(data.denominator);
    }
    if (data.assetOwner) {
      await this.fillAssetOwner(data.assetOwner);
    }
    if (data.assetApprover) {
      await this.fillAssetApprover(data.assetApprover);
    }
    if (data.costApproval) {
      await this.selectCostApproval(data.costApproval);
    }
    if (data.nestleCostApprover) {
      await this.fillNestleCostApprover(data.nestleCostApprover);
    }
    if (data.companyCode) {
      await this.fillCompanyCode(data.companyCode);
    }

    if (data.translationRequired && data.translationRequired) {
      await this.toggleTranslationRequired();
      if (data.translationLanguages) {
        await this.fillTranslationLanguages(data.translationLanguages);
      }
      if (data.translationTone) {
        await this.fillTranslationTone(data.translationTone);
      }
      if (data.translationAction) {
        await this.fillTranslationAction(data.translationAction);
      }
      if (data.translationText) {
        await this.fillTranslationText(data.translationText);
      }
    }
  }

  public async save(): Promise<void> {
    await this.saveButton.click();
  }
}

interface ProjectFormData {
  projectRequestor?: string;
  projectName?: string;
  description?: string;
  deliveryDate?: string;
  nestleAssetOwnerOrganization?: string;
  businessUnit?: string;
  corporateBrand?: string;
  masterBrand?: string;
  productBrand?: string;
  denominator?: string;
  assetOwner?: string;
  assetApprover?: string;
  costApproval?: string;
  nestleCostApprover?: string;
  companyCode?: string;
  translationRequired?: boolean;
  translationLanguages?: string;
  translationTone?: string;
  translationAction?: string;
  translationText?: string;
}
