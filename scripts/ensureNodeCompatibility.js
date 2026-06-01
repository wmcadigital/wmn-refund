const nodeMajorVersion = Number(process.versions.node.split('.')[0]);
const legacyProviderFlag = '--openssl-legacy-provider';

if (nodeMajorVersion >= 17) {
  const currentNodeOptions = process.env.NODE_OPTIONS || '';

  if (!currentNodeOptions.includes(legacyProviderFlag)) {
    process.env.NODE_OPTIONS = currentNodeOptions
      ? `${currentNodeOptions} ${legacyProviderFlag}`
      : legacyProviderFlag;
  }
}
