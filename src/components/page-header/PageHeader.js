import classNames from 'classnames';

import Flex from '@cobalt/react-flex';
import { Heading, Text } from '@cobalt/react-typography';
import Icon from '@cobalt/react-icon';

import './styles.scss';

const cls = 'page-header';
const IconGap = 9;

const PageHeader = (props) => {
  const {
    backIcon,
    title,
    subTitle,
    prefixCls,
    className,
    onBack,
    style,
    extra,
    borderless,
    breadcrumbRender,
    extraInline = false,
  } = props;
  const componentCls = `${prefixCls}-${cls}`;
  const mergeClassNames = classNames(componentCls, className, { [`${componentCls}-borderless`]: borderless });

  // ============================= breadcrumb =============================
  const breadcrumbRenderDomFromProps = breadcrumbRender?.(props, null);

  const breadcrumbDom = breadcrumbRenderDomFromProps;

  const renderInlineTitle = () => {
    return (
      <Flex width="100%" alignY="center" alignX="space-between">
        {title}
        {extra}
      </Flex>
    );
  };

  return (
    <Flex className={mergeClassNames} style={style} padding={[4, 4, 6]} width="100%" direction="column">
      {breadcrumbDom && (
        <Flex grow alignY="center" width="100%" paddingLeft={onBack ? IconGap : 0}>
          {breadcrumbDom}
        </Flex>
      )}
      <Flex className={`${componentCls}-heading`} alignX="space-between" alignY="center" grow width="100%">
        <Flex className={`${componentCls}-heading-left`} direction="column" grow>
          <Flex
            className={`${componentCls}-heading-left-title`}
            grow
            width="100%"
            alignY="center"
            gap={4}
            itemGrow={[0, 1]}
          >
            {onBack &&
              (backIcon || (
                <Icon
                  className={`${componentCls}-heading-back`}
                  name="arrow_back_ios"
                  size="tiny"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBack?.();
                  }}
                />
              ))}
            {typeof title === 'string' ? (
              <Heading title={title} level="1" placeholder="Title" truncated>
                {title}
              </Heading>
            ) : extraInline ? (
              renderInlineTitle()
            ) : (
              title
            )}
          </Flex>
          {subTitle && (
            <Flex grow alignY="center" paddingLeft={onBack ? IconGap : 0}>
              {typeof subTitle === 'string' ? (
                <Text color="gray" placeholder="SubTitle" title={subTitle} truncated>
                  {subTitle}
                </Text>
              ) : (
                subTitle
              )}
            </Flex>
          )}
        </Flex>
        {!extraInline && extra && (
          <Flex className={`${componentCls}-heading-extra`} gap={4}>
            {extra}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

PageHeader.defaultProps = {
  prefixCls: 'cobalt',
  borderless: false,
};

export default PageHeader;
