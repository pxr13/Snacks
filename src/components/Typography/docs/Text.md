Consistent typography and hierarchy is our most useful tool in creating a clear and understandable product for our customers.

```js
<div>
  <Text variant="title1">
    Title 1
  </Text>
  <Text variant="title2">
    Title 2
  </Text>
  <Text variant="title3">
    Title 3
  </Text>
  <Text variant="sectionTitle">
    Section title
  </Text>
  <Text variant="subtitleText">
    Subtitle text
  </Text>
  <Text variant="bodyTitle1">
    Body title 1
  </Text>
  <Text variant="bodyTitle2">
    Body title 2
  </Text>
  <Text variant="body1">
    Body 1
  </Text>
  <Text variant="body2">
    Body 2
  </Text>
  <Text variant="subtext">
    Subtext
  </Text>
  <Text variant="mobileTitle">
    Mobile title
  </Text>
</div>

<div style={{marginTop: '24px'}}>
  <style dangerouslySetInnerHTML={{__html: `
    .typography-table td {
      padding: 10px;
      vertical-align: top;
    }
    .typography-table-variant {
      white-space: nowrap;
    }
  `}} />
  <hr />
  <div style={{marginTop: '24px'}}>
    <Text variant="title3">Type Guidelines</Text>
    <Text variant="body1">Guidelines on font treatment along with suggested use cases</Text>
  </div>
  <table className="typography-table" style={{width: '100%', marginTop: '24px'}}>
    <tbody>
      <tr>
        <td className="typography-table-variant">
          <Text variant="title1">Title 1</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Oversized screen titles on web. Use sparingly.</Text>
        </td>
        <td>
          <Text variant="title1">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="title2">Title 2</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Top-level headers. Use for page titles on web.</Text>
        </td>
        <td>
          <Text variant="title2">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="title3">Title 3</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Main titles. Use when it's not necessary to have big titles like Title 2.</Text>
        </td>
        <td>
          <Text variant="title3">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="sectionTitle">Section Title</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Titles for sections, modals, trays, etc.</Text>
        </td>
        <td>
          <Text variant="sectionTitle">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="subtitleText">Subtitle text</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Use subtitles to Titles 1-3 and Section Title</Text>
        </td>
        <td>
          <Text variant="subtitleText">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="bodyTitle1">Body Title 1</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Section titles or body titles in paragraphs</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="bodyTitle2">Body title 2</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Section titles</Text>
        </td>
        <td>
          <Text variant="bodyTitle2">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="body2">Body 2</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Body text where 14 is too small or header text on mobile</Text>
        </td>
        <td>
          <Text variant="body2">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="body1">Body 1</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Body text, usually good for paragraphs</Text>
        </td>
        <td>
          <Text variant="body1">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="subtext">Subtext</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Subtext for de-emphasized information and body text for mobile</Text>
        </td>
        <td>
          <Text variant="subtext">Don't talk about snacks</Text>
        </td>
      </tr>
      <tr>
        <td className="typography-table-variant">
          <Text variant="mobileTitle">Mobile Title</Text>
        </td>
        <td>
          <Text variant="bodyTitle1">Suggested usage</Text>
          <Text variant="body1">Subtext for de-emphasized information</Text>
        </td>
        <td>
          <Text variant="mobileTitle">Don't talk about snacks</Text>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```