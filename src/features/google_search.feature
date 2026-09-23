Feature: Kiem tra cau hinh BDD
  Scenario: Chay thu 1
    Given Toi mo trang Google
    When Toi tim kiem "Playwright"
    And Call API voi token hop le
    Then Ket qua tim kiem hien thi
  
    Scenario: Chay thu 2
    Given Toi mo trang Google
    When Toi tim kiem "Playwright"
    And Call API voi token hop le
    Then Ket qua tim kiem hien thi