---
eleventyComputed:
  title: Checklist for enterprises
  order: 40
  description: Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.
---
Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.  

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDM }} before proceeding.  

<table>
	<tr>
		<th>
CHECKLIST FOR ENTERPRISES 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Step 1 - Register your license  

* [Team registration](/rdm/windows/installation/client/registration/team-edition/)  
* [Trial request](/rdm/windows/installation/client/registration/trial-request/)  
		</td>
		<td>
[Add your license](/rdm/windows/installation/client/registration/team-edition/) to the data source. A {{ en.RDM }} Team Edition [30-day trial](/rdm/windows/installation/client/registration/trial-request/) is available upon request.  
		</td>
	</tr>
	<tr>
		<td>
Step 2 - Add your data source

		</td>
		<td>
Warning: When choosing any [data source](/rdm/windows/data-sources/create-new-data-source/) type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/windows/commands/administration/settings/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.  

Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in [Data Sources](/rdm/windows/data-sources/). For help selecting a data source tailored to your needs, please see [Select a data source type - Enterprises](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).  
		</td>
	</tr>
	<tr>
		<td>
Step 3 - Select your security provider

		</td>
		<td>
Select your [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database.  
		</td>
	</tr>
	<tr>
		<td>
Step 4 - Create your folder structure

		</td>
		<td>
Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. For example, you can create a folder for your Production team, one for your Staging team and one for your Testing team.  

{% youtube '__xK92eTdgU' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 5 - Create your default settings

		</td>
		<td>
In ***File – Options***, you can set options for {{ en.RDM }} and create [default settings templates](/rdm/windows/commands/file/templates/default-settings/). Each entry type is supported and can have a default template defined to fit your requirements. After you configure the options, use the [{{ en.CI }}](/rdm/windows/installation/client/custom-installer-service/) to share the pre-configured version with your team.  
		</td>
	</tr>
	<tr>
		<td>
Step 6 - Create users

		</td>
		<td>
{{ en.RDM }} supports advanced [user management](/rdm/windows/commands/administration/management/user-management/). User accounts must be created manually by an administrator of the database.  
		</td>
	</tr>
	<tr>
		<td>
Step 7 - Create user groups

		</td>
		<td>
Create [User Groups](/rdm/windows/commands/administration/management/user-groups-management/) to manage your security system. You can then assign users to user groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually.  
		</td>
	</tr>
	<tr>
		<td>
Step 8 - Create entries

		</td>
		<td>
An [entry](/rdm/windows/commands/edit/entries/creating-new-entry/) is how you save information about your sessions (e.g., RDP, SSH), credentials, websites, VPNs, synchronizers, and documents.  
		</td>
	</tr>
	<tr>
		<td>
Step 9 - Grant permissions

		</td>
		<td>
Once your users are created, you can then grant [Permissions](/rdm/windows/user-groups-based-access-control/permissions/) for user group-based access control. The permissions granted on the folder can be inherited by each entry set under that folder.  
		</td>
	</tr>
	<tr>
		<td>
Step 10 - Import your data

		</td>
		<td>
The final step is to [import your data](/rdm/windows/commands/file/import/) into {{ en.RDM }}. You can import your sessions, logins, and contacts in a few steps.  
		</td>
	</tr>
</table>
