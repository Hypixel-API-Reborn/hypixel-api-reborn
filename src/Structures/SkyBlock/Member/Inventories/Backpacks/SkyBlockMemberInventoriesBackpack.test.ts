import SkyBlockMemberInventoriesBackpack from './SkyBlockMemberInventoriesBackpack.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBackpack', () => {
  /* eslint-disable quote-props */
  /* eslint-disable max-len */
  const data = new SkyBlockMemberInventoriesBackpack(
    {
      backpackIcons: {
        '0': {
          data: 'H4sIAAAAAAAA/0VUyW7jRhRsezKJ7UMmyDEnBsglEByLm0QHmAMliuZOkeIi8hI0yZbYFDdxlfQP+Y655Cvmw4LQQYAcHrpRr6q76lJPADyCO/wEALi7B/c4ufvzDnxcV33Z3T2BDx08fgCPEk6QmMNjO7H+fgJPu1Of5+ZYouYB3MsJ+IUiXyG7JOfPBwSpZ5ommedXdIinGxPHNJswTHy4Az+k1xpfUL6t6j6HHUqmH562TVWjpsOofQQPHbp0fYPaf+08gMcdPpbwHbn/S2OlRFAFvx+UkBN28LiGRzV3tXUdO4VLptGgKPNLuNxJZDCa7RtzpsS0ENa8ejh6oi8wHlq6F+nUVoOeYXW+w2PUK7DuF3mWjcN1QWXCjBPRKl2WjXxZnXLmNcD01ZL7iNF5Hs5Y1jkvhYFc2UoPGytN+7XRzQZa7ZStnUsnq18y1Wnb+sFufHth8/GmhN2wvmgUOrQrH2u7ImI5tRqt0Nme3TCytn11thgrEUPIs3ulOlacOw+gLgraZfCkZMOcbPLKp359cb29Xwj7lla6E800TkVJm0LX7TIuDkcNboOFb3XeiMzh1PZIdYIXJdQoOPi+sbHGeN+L2zy67NZZW2nCYeRa3TlEPut4Y0Nu+tzs8esy3q60ULS3fJIfljWEq8vSjG1r1uh4j/LCOAmVEtf18iVNOSzPN5s6oZuySCw2as5zKlDTs7TfGUF2cLhzZaxNq+woMxEZbTfrdLE+q6K2Y6jIgnC3zu0ZOZ728wWkV9VhK5dSsLb29dpL1df9KC2L2murmbo4mqquyBSt1VpOu4IecnkZL1hJTF8OpLqzzoEazqRNzxrHeolX/vCai6aa5QNG4v4i306IvZ5ziubCm8if3bMTUr5n6o0qp44keQuSVQ9BbHMLIWhE/aXHJQPl7ogDFKdwffM0nc5SzT91mikEWjIjfV5Ri5rbGIFajJhbsKu3S6FfDZm51XsWFor1+QF89GDeo7sEXZU59Mk8pu002vPYzDakkR2vuqOPhrOZ61nQyuXqGlFhHb15SriWF/K0D27BaBQ6OZ2kntnYuJ2YIDtdAmdzDQUjNbINZToxLeMRx5IyhEXehi6bRr6LTayYEW2/zxAX+ZDsDTP0yeFfLpWXUSHOk72Su4V3Sfz8GvoWNkv7mvju5MXOkWSTceHd5Kxeyrmh7Vxm2rd40rRyVmEo2fNYqAaN/p+rFWQdFV4WF2KRrNk+3FtD8uYxieRdwx1H6cWUJDNSXXDnpiBm4ZtLGzd5rgv8aPj6GL7ZWei7l+DGU6bvkobDzwMnuAaUO77nNIWYDTOXDByd1W8nSncsSi7J14P1+fPUFU/guwS3dQ6vj+AbrWrQwwR+BL9+/bLkiQgeiRF3KfH1CyS5CSLavOpaYkxxnBIxLIkIgZ8nfNLHKCFwSVyrviF2XdXAIyJ0VPZEV4GfJko7YYiASYI7XJUwJ3CHiva3dwtfv7x+/ZLbvL15AN8YsEDgxwnSUYL7gljB+FRPMzn9tLl0DeS7rsFR36H24b11wSd9I8iu/seKX6vbaR7A99F/mj/iKq8a8J2wEXlXc6bX+35S/EIeuJhkWPRMLiPymYFk8hwhlDwz7AIuuYSM0TyZOrTDBWo7WNTgE/fCvlAUQVK/MyTB6wDcg28FWEwhwQcA/gHPGZa2CwYAAA=='
        }
      },
      backpackContents: {
        '0': {
          data: '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'
        }
      }
    },
    '0'
  );
  /* eslint-enable quote-props */
  /* eslint-enable max-len */
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBackpack);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBackpack>();
  expect(data.backpackItemBase64).toBeDefined();
  expectTypeOf(data.backpackItemBase64).toEqualTypeOf<string>();
  expect(data.backpackContentsBase64).toBeDefined();
  expectTypeOf(data.backpackContentsBase64).toEqualTypeOf<string>();
});
