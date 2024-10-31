import { test, expect } from "@playwright/test";
import { ProjectModal } from "../../project/modals/ProjectModal-imperative";

test.describe("Project Modal Form Tests", () => {
  test("should fill and submit the project form successfully", async ({
    page,
  }) => {
    const projectModal = new ProjectModal(page);

    await page.goto("https://your-form-url.com");

    await projectModal.fillProjectRequestor("qa senpai");
    await projectModal.fillProjectName("New Project");
    await projectModal.fillDescription("This is a test description");
    await projectModal.selectDeliveryDate("09/19/2024");
    await projectModal.fillNestleAssetOwnerOrganization("qa dojo");
    await projectModal.fillBusinessUnit("Marketing");
    await projectModal.fillCorporateBrand("qa");
    await projectModal.fillMasterBrand("qa Master");
    await projectModal.fillProductBrand("qa Product");
    await projectModal.fillDenominator("Denom123");

    await projectModal.fillAssetOwner("Admin");
    await projectModal.fillAssetApprover("Approver 1");
    await projectModal.selectCostApproval("Option 1"); // Замінити на актуальний варіант
    await projectModal.fillNestleCostApprover("Cost Approver");
    await projectModal.fillCompanyCode("12345");

    await projectModal.toggleTranslationRequired();
    await projectModal.fillTranslationLanguages("English");
    await projectModal.fillTranslationTone("Formal");
    await projectModal.fillTranslationAction("Translate");
    await projectModal.fillTranslationText("This is the translation text.");

    await projectModal.save();

    await expect(page.locator("text=Project saved successfully")).toBeVisible();
  });
});
