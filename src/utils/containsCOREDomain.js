const containsCOREDomain = email => {
  //  Check for CORE domains and reject if any are found
  const emailDomain = email.split('@')[1];
  const coreDomains = [
    'ccg-services.com',
    'ccggroupltd.com',
    'ccgltd.mail.onmicrosoft.com',
    'ccgltd.onmicrosoft.com',
    'coreccg.com',
    'coreconstruct.com',
    'coreconstructaz.com',
    'coreconstructfl.com',
    'coreconstructil.com',
    'coreconstruction.com',
    'coreconstructnv.com',
    'coreconstructtx.com',
    'coreenergy.com',
    'corehorus.com',
    'coreltd',
    'gaisb.com',
    'pointcoreconstruction.com',
    'procedeogroup.com',
    'sbhcore.com',
    'sunvalleyconstruction.com',
    'svmasonry.com',
    'waltoncore.com',
  ];

  return coreDomains.includes(emailDomain);
};

export default containsCOREDomain;
