from urllib.parse import unquote

COOKIE_NAME_INDEX = 5
COOKIE_VALUE_INDEX = 6
COOKIE_NAME_WHITELIST = set(('MINTJSESSIONID', 'ROUTEID', 'mint.authid', 'mint.ticket', 'mint.glogin'))

def filter_cookies_text(cookies_text: str):
    cookies = {}
    
    for cookie in cookies_text.splitlines():
        cols = cookie.split('\t')
        if 'credit.finance.intuit.com' not in cookie and COOKIE_NAME_WHITELIST.intersection(set(cols)):
            cookies[cols[COOKIE_NAME_INDEX]] = unquote(cols[COOKIE_VALUE_INDEX])

    return cookies


if __name__ == '__main__':
    cookie_text = filter_cookies_text("""Get cookies.txt for 
mint.intuit.com

Domain	Include subdomains	Path	Secure	Expiry	Name	Value
.help.developer.intuit.com	TRUE	/s	TRUE	0	renderCtx	%7B%22pageId%22%3A%221ad2868b-e455-4861-b5f0-5f06aceafc40%22%2C%22schema%22%3A%22Published%22%2C%22viewType%22%3A%22Published%22%2C%22brandingSetId%22%3A%22d4ae969c-a8ff-4f85-a81f-6fa3cf5943ba%22%2C%22audienceIds%22%3A%226Au0f000000XZNQ%22%7D
help.developer.intuit.com	FALSE	/s	FALSE	1646460759	guest_uuid_essential_0DMG0000000blPx	64dafb99-1985-4f2f-ac26-aa7688898094
.intuit.com	TRUE	/	TRUE	1646472879	tt_ipgeo	1281883062%7CUS%7CCA%7CY%7C37.2803%7C-121.9567%7C807%7C95008%7CCampbell
.intuit.com	TRUE	/	TRUE	0	priorityCode	3468337910
.intuit.com	TRUE	/	TRUE	1646472879	tms_mint	""
.intuit.com	TRUE	/	FALSE	1646515630	ivid	1ded881e-c49d-406b-b235-b94e6f448810
.intuit.com	TRUE	/	TRUE	0	AKES_GEO	US~CA
.intuit.com	TRUE	/	FALSE	1646515630	ivid_b	55cadfde-eb2b-48bd-8e19-c17842fe0e97
.intuit.com	TRUE	/	FALSE	1646449582	did	SHOPPER2_10d343910a60c179f9952da070f407c3829f5df3c404afdf4b9c20a94ebf9eefbd5a25ece1483052d2b3e1d9746847fb
.intuit.com	TRUE	/	FALSE	0	s_cc	true
.intuit.com	TRUE	/	FALSE	1646513354	s_fid	519194C1F206C0F1-361678D209347BE2
mint.intuit.com	FALSE	/	TRUE	0	ROUTEID	.
mint.intuit.com	FALSE	/	TRUE	1632170957	currentClientType	Mint
mint.intuit.com	FALSE	/	TRUE	1632170957	brandingOption	whitelabel
mint.intuit.com	FALSE	/	TRUE	1632170957	current-config-source	Back-end
mint.intuit.com	FALSE	/	TRUE	1646449655	mu	1
mint.intuit.com	FALSE	/	TRUE	0	mintUserName	""
.intuit.com	TRUE	/	FALSE	1646449655	wa_login	1
credit.finance.intuit.com	FALSE	/	FALSE	0	ROUTEID	.PODN9
help.developer.intuit.com	FALSE	/	FALSE	1646460761	pctrk	376bb712-1d38-40a3-94e0-f7c9350cda34
blogs.intuit.com	FALSE	/	FALSE	0	PHPSESSID	ni01vj7f1dqi24ddp02j735m88
.intuit.com	TRUE	/	FALSE	1638684785	_fbp	fb.1.1630908784813.1510301053
.help.developer.intuit.com	TRUE	/	FALSE	1646460795	CookieConsentPolicy	0:1
.intuit.com	TRUE	/	TRUE	1646461521	ivid_p	1ded881e-c49d-406b-b235-b94e6f448810
mint.intuit.com	FALSE	/	FALSE	0	_transactionIframeLocation	undefined
.intuit.com	TRUE	/	TRUE	1637049599	visitCount	3|1630920879439
.intuit.com	TRUE	/	TRUE	0	qbn.uidp	1334fed88e1074ddca6890996916e7747
.intuit.com	TRUE	/	TRUE	0	userIdentifier	123145668410787
.intuit.com	TRUE	/	TRUE	1646513344	mint.glogin	noahcardoza%40gmail.com
mint.intuit.com	FALSE	/	TRUE	0	mintPN	6
mint.intuit.com	FALSE	/	TRUE	1632130519	_exp_mintPN	6
mint.intuit.com	FALSE	/	TRUE	1632170957	userguid	DE0A8020FFD33B83
.intuit.com	TRUE	/	TRUE	0	pauth.uuid.prd	4a27040c-9342-41bf-be9b-13f5741bf5f6
help.developer.intuit.com	FALSE	/	TRUE	1630966678	sfdc-stream	!hm4zkXKhrRR+yjAUxXJJXeOm2yq/ETTTKUWXTSJTx84/NwDVhK3KkkX1W5mu34XL2xzKhJ3Fi8KmZA==
.intuit.com	TRUE	/	TRUE	0	ius_session	248735A5E39348828C286301B829AB79
.intuit.com	TRUE	/	FALSE	1646513155	utag_main	v_id:017bb9122c34001ae82abfe4a4ff0407900c507100fb8$_sn:7$_se:1$_ss:1$_st:1630962955157$ses_id:1630961155157%3Bexp-session$_pn:1%3Bexp-session
.intuit.com	TRUE	/	FALSE	1646513155	CONSENTMGR	dns:false%7Cconsent:true%7Cts:1630961155172
.intuit.com	TRUE	/	FALSE	0	akid	gip104.86.4.200_gsip23.37.127.84_clip76.103.251.182_rclip184.25.57.181
.intuit.com	TRUE	/	TRUE	0	mint.authid	123145668410787
.intuit.com	TRUE	/	TRUE	0	mint.gauthid	123145668410787
.intuit.com	TRUE	/	TRUE	0	mint.agentid	123145668410787
.intuit.com	TRUE	/	TRUE	0	mint.parentid	50000003
.intuit.com	TRUE	/	TRUE	0	login.offering	Mint
.intuit.com	TRUE	/	TRUE	0	qbn.authid	123145668410787
.intuit.com	TRUE	/	TRUE	0	qbn.gauthid	123145668410787
.intuit.com	TRUE	/	TRUE	0	qbn.agentid	123145668410787
.intuit.com	TRUE	/	TRUE	0	qbn.parentid	50000003
.intuit.com	TRUE	/	TRUE	0	mint.ticket	V1-72-X0nuvnshccfysjszfjhraa
.intuit.com	TRUE	/	TRUE	0	mint.tkt	V1-72-X0nuvnshccfysjszfjhraa
.intuit.com	TRUE	/	TRUE	0	qbn.ticket	V1-72-X0nuvnshccfysjszfjhraa
.intuit.com	TRUE	/	TRUE	0	qbn.tkt	V1-72-X0nuvnshccfysjszfjhraa
.intuit.com	TRUE	/	FALSE	0	s_sq	%5B%5BB%5D%5D
.intuit.com	TRUE	/	TRUE	1646513344	qbn.account_chooser	sHBHI6LW0yDxKHlaAT1j6xfWpf7kbiNhnXHFFZkXh4ZElCO6IaacR1436DJ-Y78YfOPcRozfs44Mu64F3vhGUmLEGY0jfjCMbytyaJsyjlgnPm8JhdLCnoLlSsLpILChdxI6ve3RmLiGFnCZ71xUhXWNZcD6NuoZjVaxm7rCfdjzjg9HkfveAKh95l6UbyXNU6UHb1DKHRElCgcylhy1amiDUul5fVfbco1gw_Idkqd7SveHU3h7MukJf4MWjfNgDaxCq8MUoSWKOfG-v7FcJtM6LzG9ZKIOnHfaRj9SrEkz-szsOF23N1ThTtU4GuiDWaF9ln_nuVrJTQGTasYZP8LtAzMsFumPRd0X_PhyJk3u_WYySvhmqrdgRaoxUYlHhevbIIWwxpTkj0heKEPJj1k4wPYt1ABq5iX4CenH6fgWe2cG0-aP3IhFd247ONtPF-pRgTmqsnWq_uzHdH4OGKt-fgSwtVC1X1imhVFOam_bOA3dt5bowg
.intuit.com	TRUE	/	TRUE	0	ius_at	1630961344313
mint.intuit.com	FALSE	/	TRUE	0	MINTJSESSIONID	590204751ECBB66D7188B46A7871B495-n1
mint.intuit.com	FALSE	/	FALSE	0	pseudonymID	1334fed88e1074ddca6890996916e7747
.intuit.com	TRUE	/	FALSE	0	AMCVS_969430F0543F253D0A4C98C6%40AdobeOrg	1
.intuit.com	TRUE	/	FALSE	1646514839	AMCV_969430F0543F253D0A4C98C6%40AdobeOrg	1585540135%7CMCMID%7C79569248536750784145179433657346203244%7CvVersion%7C4.4.0%7CMCIDTS%7C18877%7CMCAID%7CNONE%7CMCOPTOUT-1630970039s%7CNONE
.intuit.com	TRUE	/	FALSE	1630964830	websdk_swiper_flags	first_sc_hit%2Cwait_for_sc
mint.intuit.com	FALSE	/	TRUE	1630963699	SameSite	None
mintappservice.api.intuit.com	FALSE	/	FALSE	1630963698	ADRUM_BTa	"R:24|g:4510c132-10e7-4c38-9d4f-50b959221038|n:intuit-ceg-prod_8d8edf0a-a275-4aff-ad4e-a69849f0b3b6"
mintappservice.api.intuit.com	FALSE	/	TRUE	1630963698	SameSite	None
contentpersonalization.api.intuit.com	FALSE	/	FALSE	1630963699	ADRUM_BTa	"R:24|g:a099534d-e8c7-47a3-82c5-2a1189af4245|n:intuit-ceg-prod_8d8edf0a-a275-4aff-ad4e-a69849f0b3b6"
contentpersonalization.api.intuit.com	FALSE	/	TRUE	1630963699	SameSite	None
contentpersonalization.api.intuit.com	FALSE	/	FALSE	1630963699	ADRUM_BT1	"R:24|i:64553|e:0|d:1"
mint.intuit.com	FALSE	/	TRUE	1631568470	AWSALB	ekJWA0+xcnLV9fTfwptQJUCD0gDZhKVZJzZms9WoOksksYGI4+TYrSytK7ziwWzAa5kYa2AUVZl05Im1oCN1qZcdgspwrdlhxaeHLarB4HbX4XuP4aF2LC1jzXe0
mint.intuit.com	FALSE	/	TRUE	1631568470	AWSALBCORS	ekJWA0+xcnLV9fTfwptQJUCD0gDZhKVZJzZms9WoOksksYGI4+TYrSytK7ziwWzAa5kYa2AUVZl05Im1oCN1qZcdgspwrdlhxaeHLarB4HbX4XuP4aF2LC1jzXe0
""")

    print(cookie_text)
