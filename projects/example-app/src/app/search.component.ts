import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <div class="search__query">
        <label class="search__label" for="search">Search</label>
        <input class="search__field"
               type="text"
               id="search"
               [formControl]="term"
               placeholder="Search"
               autocomplete="off">
      </div>
      <div class="search__answer">
        <ng-container *ngFor="let result of results">
          <a [routerLink]="result.slice(0,1)" [fragment]="result" (click)="clear()">{{result}}</a>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  term = new FormControl('');
  results = [];
  icons = [
    'ad',
    'address_book',
    'address_card',
    'adjust',
    'air_freshener',
    'align_center',
    'align_justify',
    'align_left',
    'align_right',
    'allergies',
    'ambulance',
    'american_sign_language_interpreting',
    'anchor',
    'angle_double_down',
    'angle_double_left',
    'angle_double_right',
    'angle_double_up',
    'angle_down',
    'angle_left',
    'angle_right',
    'angle_up',
    'angry',
    'ankh',
    'apple_alt',
    'archive',
    'archway',
    'arrow_alt_circle_down',
    'arrow_alt_circle_left',
    'arrow_alt_circle_right',
    'arrow_alt_circle_up',
    'arrow_circle_down',
    'arrow_circle_left',
    'arrow_circle_right',
    'arrow_circle_up',
    'arrow_down',
    'arrow_left',
    'arrow_right',
    'arrow_up',
    'arrows_alt_h',
    'arrows_alt_v',
    'arrows_alt',
    'assistive_listening_systems',
    'asterisk',
    'at',
    'atlas',
    'atom',
    'audio_description',
    'award',
    'baby_carriage',
    'baby',
    'backspace',
    'backward',
    'bacon',
    'bahai',
    'balance_scale_left',
    'balance_scale_right',
    'balance_scale',
    'ban',
    'band_aid',
    'barcode',
    'bars',
    'baseball_ball',
    'basketball_ball',
    'bath',
    'battery_empty',
    'battery_full',
    'battery_half',
    'battery_quarter',
    'battery_three_quarters',
    'bed',
    'beer',
    'bell_slash',
    'bell',
    'bezier_curve',
    'bible',
    'bicycle',
    'biking',
    'binoculars',
    'biohazard',
    'birthday_cake',
    'blender_phone',
    'blender',
    'blind',
    'blog',
    'bold',
    'bolt',
    'bomb',
    'bone',
    'bong',
    'book_dead',
    'book_medical',
    'book_open',
    'book_reader',
    'book',
    'bookmark',
    'border_all',
    'border_none',
    'border_style',
    'bowling_ball',
    'box_open',
    'box_tissue',
    'box',
    'boxes',
    'braille',
    'brain',
    'bread_slice',
    'briefcase_medical',
    'briefcase',
    'broadcast_tower',
    'broom',
    'brush',
    'bug',
    'building',
    'bullhorn',
    'bullseye',
    'burn',
    'bus_alt',
    'bus',
    'business_time',
    'calculator',
    'calendar_alt',
    'calendar_check',
    'calendar_day',
    'calendar_minus',
    'calendar_plus',
    'calendar_times',
    'calendar_week',
    'calendar',
    'camera_retro',
    'camera',
    'campground',
    'candy_cane',
    'cannabis',
    'capsules',
    'car_alt',
    'car_battery',
    'car_crash',
    'car_side',
    'car',
    'caravan',
    'caret_down',
    'caret_left',
    'caret_right',
    'caret_square_down',
    'caret_square_left',
    'caret_square_right',
    'caret_square_up',
    'caret_up',
    'carrot',
    'cart_arrow_down',
    'cart_plus',
    'cash_register',
    'cat',
    'certificate',
    'chair',
    'chalkboard_teacher',
    'chalkboard',
    'charging_station',
    'chart_area',
    'chart_bar',
    'chart_line',
    'chart_pie',
    'check_circle',
    'check_double',
    'check_square',
    'check',
    'cheese',
    'chess_bishop',
    'chess_board',
    'chess_king',
    'chess_knight',
    'chess_pawn',
    'chess_queen',
    'chess_rook',
    'chess',
    'chevron_circle_down',
    'chevron_circle_left',
    'chevron_circle_right',
    'chevron_circle_up',
    'chevron_down',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'child',
    'church',
    'circle_notch',
    'circle',
    'city',
    'clinic_medical',
    'clipboard_check',
    'clipboard_list',
    'clipboard',
    'clock',
    'clone',
    'closed_captioning',
    'cloud_download_alt',
    'cloud_meatball',
    'cloud_moon_rain',
    'cloud_moon',
    'cloud_rain',
    'cloud_showers_heavy',
    'cloud_sun_rain',
    'cloud_sun',
    'cloud_upload_alt',
    'cloud',
    'cocktail',
    'code_branch',
    'code',
    'coffee',
    'cog',
    'cogs',
    'coins',
    'columns',
    'comment_alt',
    'comment_dollar',
    'comment_dots',
    'comment_medical',
    'comment_slash',
    'comment',
    'comments_dollar',
    'comments',
    'compact_disc',
    'compass',
    'compress_alt',
    'compress_arrows_alt',
    'compress',
    'concierge_bell',
    'cookie_bite',
    'cookie',
    'copy',
    'copyright',
    'couch',
    'credit_card',
    'crop_alt',
    'crop',
    'cross',
    'crosshairs',
    'crow',
    'crown',
    'crutch',
    'cube',
    'cubes',
    'cut',
    'database',
    'deaf',
    'democrat',
    'desktop',
    'dharmachakra',
    'diagnoses',
    'dice_d_20',
    'dice_d_6',
    'dice_five',
    'dice_four',
    'dice_one',
    'dice_six',
    'dice_three',
    'dice_two',
    'dice',
    'digital_tachograph',
    'directions',
    'disease',
    'divide',
    'dizzy',
    'dna',
    'dog',
    'dollar_sign',
    'dolly_flatbed',
    'dolly',
    'donate',
    'door_closed',
    'door_open',
    'dot_circle',
    'dove',
    'download',
    'drafting_compass',
    'dragon',
    'draw_polygon',
    'drum_steelpan',
    'drum',
    'drumstick_bite',
    'dumbbell',
    'dumpster_fire',
    'dumpster',
    'dungeon',
    'edit',
    'egg',
    'eject',
    'ellipsis_h',
    'ellipsis_v',
    'envelope_open_text',
    'envelope_open',
    'envelope_square',
    'envelope',
    'equals',
    'eraser',
    'ethernet',
    'euro_sign',
    'exchange_alt',
    'exclamation_circle',
    'exclamation_triangle',
    'exclamation',
    'expand_alt',
    'expand_arrows_alt',
    'expand',
    'external_link_alt',
    'external_link_square_alt',
    'eye_dropper',
    'eye_slash',
    'eye',
    'fan',
    'fast_backward',
    'fast_forward',
    'faucet',
    'fax',
    'feather_alt',
    'feather',
    'female',
    'fighter_jet',
    'file_alt',
    'file_archive',
    'file_audio',
    'file_code',
    'file_contract',
    'file_csv',
    'file_download',
    'file_excel',
    'file_export',
    'file_image',
    'file_import',
    'file_invoice_dollar',
    'file_invoice',
    'file_medical_alt',
    'file_medical',
    'file_pdf',
    'file_powerpoint',
    'file_prescription',
    'file_signature',
    'file_upload',
    'file_video',
    'file_word',
    'file',
    'fill_drip',
    'fill',
    'film',
    'filter',
    'fingerprint',
    'fire_alt',
    'fire_extinguisher',
    'fire',
    'first_aid',
    'fish',
    'fist_raised',
    'flag_checkered',
    'flag_usa',
    'flag',
    'flask',
    'flushed',
    'folder_minus',
    'folder_open',
    'folder_plus',
    'folder',
    'font_awesome_logo_full',
    'font',
    'football_ball',
    'forward',
    'frog',
    'frown_open',
    'frown',
    'funnel_dollar',
    'futbol',
    'gamepad',
    'gas_pump',
    'gavel',
    'gem',
    'genderless',
    'ghost',
    'gift',
    'gifts',
    'glass_cheers',
    'glass_martini_alt',
    'glass_martini',
    'glass_whiskey',
    'glasses',
    'globe_africa',
    'globe_americas',
    'globe_asia',
    'globe_europe',
    'globe',
    'golf_ball',
    'gopuram',
    'graduation_cap',
    'greater_than_equal',
    'greater_than',
    'grimace',
    'grin_alt',
    'grin_beam_sweat',
    'grin_beam',
    'grin_hearts',
    'grin_squint_tears',
    'grin_squint',
    'grin_stars',
    'grin_tears',
    'grin_tongue_squint',
    'grin_tongue_wink',
    'grin_tongue',
    'grin_wink',
    'grin',
    'grip_horizontal',
    'grip_lines_vertical',
    'grip_lines',
    'grip_vertical',
    'guitar',
    'h_square',
    'hamburger',
    'hammer',
    'hamsa',
    'hand_holding_heart',
    'hand_holding_medical',
    'hand_holding_usd',
    'hand_holding_water',
    'hand_holding',
    'hand_lizard',
    'hand_middle_finger',
    'hand_paper',
    'hand_peace',
    'hand_point_down',
    'hand_point_left',
    'hand_point_right',
    'hand_point_up',
    'hand_pointer',
    'hand_rock',
    'hand_scissors',
    'hand_sparkles',
    'hand_spock',
    'hands_helping',
    'hands_wash',
    'hands',
    'handshake_alt_slash',
    'handshake_slash',
    'handshake',
    'hanukiah',
    'hard_hat',
    'hashtag',
    'hat_cowboy_side',
    'hat_cowboy',
    'hat_wizard',
    'hdd',
    'head_side_cough_slash',
    'head_side_cough',
    'head_side_mask',
    'head_side_virus',
    'heading',
    'headphones_alt',
    'headphones',
    'headset',
    'heart_broken',
    'heart',
    'heartbeat',
    'helicopter',
    'highlighter',
    'hiking',
    'hippo',
    'history',
    'hockey_puck',
    'holly_berry',
    'home',
    'horse_head',
    'horse',
    'hospital_alt',
    'hospital_symbol',
    'hospital_user',
    'hospital',
    'hot_tub',
    'hotdog',
    'hotel',
    'hourglass_end',
    'hourglass_half',
    'hourglass_start',
    'hourglass',
    'house_damage',
    'house_user',
    'hryvnia',
    'i_cursor',
    'ice_cream',
    'icicles',
    'icons',
    'id_badge',
    'id_card_alt',
    'id_card',
    'igloo',
    'image',
    'images',
    'inbox',
    'indent',
    'industry',
    'infinity',
    'info_circle',
    'info',
    'italic',
    'jedi',
    'joint',
    'journal_whills',
    'kaaba',
    'key',
    'keyboard',
    'khanda',
    'kiss_beam',
    'kiss_wink_heart',
    'kiss',
    'kiwi_bird',
    'landmark',
    'language',
    'laptop_code',
    'laptop_house',
    'laptop_medical',
    'laptop',
    'laugh_beam',
    'laugh_squint',
    'laugh_wink',
    'laugh',
    'layer_group',
    'leaf',
    'lemon',
    'less_than_equal',
    'less_than',
    'level_down_alt',
    'level_up_alt',
    'life_ring',
    'lightbulb',
    'link',
    'lira_sign',
    'list_alt',
    'list_ol',
    'list_ul',
    'list',
    'location_arrow',
    'lock_open',
    'lock',
    'long_arrow_alt_down',
    'long_arrow_alt_left',
    'long_arrow_alt_right',
    'long_arrow_alt_up',
    'low_vision',
    'luggage_cart',
    'lungs_virus',
    'lungs',
    'magic',
    'magnet',
    'mail_bulk',
    'male',
    'map_marked_alt',
    'map_marked',
    'map_marker_alt',
    'map_marker',
    'map_pin',
    'map_signs',
    'map',
    'marker',
    'mars_double',
    'mars_stroke_h',
    'mars_stroke_v',
    'mars_stroke',
    'mars',
    'mask',
    'medal',
    'medkit',
    'meh_blank',
    'meh_rolling_eyes',
    'meh',
    'memory',
    'menorah',
    'mercury',
    'meteor',
    'microchip',
    'microphone_alt_slash',
    'microphone_alt',
    'microphone_slash',
    'microphone',
    'microscope',
    'minus_circle',
    'minus_square',
    'minus',
    'mitten',
    'mobile_alt',
    'mobile',
    'money_bill_alt',
    'money_bill_wave_alt',
    'money_bill_wave',
    'money_bill',
    'money_check_alt',
    'money_check',
    'monument',
    'moon',
    'mortar_pestle',
    'mosque',
    'motorcycle',
    'mountain',
    'mouse_pointer',
    'mouse',
    'mug_hot',
    'music',
    'network_wired',
    'neuter',
    'newspaper',
    'not_equal',
    'notes_medical',
    'object_group',
    'object_ungroup',
    'oil_can',
    'om',
    'otter',
    'outdent',
    'pager',
    'paint_brush',
    'paint_roller',
    'palette',
    'pallet',
    'paper_plane',
    'paperclip',
    'parachute_box',
    'paragraph',
    'parking',
    'passport',
    'pastafarianism',
    'paste',
    'pause_circle',
    'pause',
    'paw',
    'peace',
    'pen_alt',
    'pen_fancy',
    'pen_nib',
    'pen_square',
    'pen',
    'pencil_alt',
    'pencil_ruler',
    'people_arrows',
    'people_carry',
    'pepper_hot',
    'percent',
    'percentage',
    'person_booth',
    'phone_alt',
    'phone_slash',
    'phone_square_alt',
    'phone_square',
    'phone_volume',
    'phone',
    'photo_video',
    'piggy_bank',
    'pills',
    'pizza_slice',
    'place_of_worship',
    'plane_arrival',
    'plane_departure',
    'plane_slash',
    'plane',
    'play_circle',
    'play',
    'plug',
    'plus_circle',
    'plus_square',
    'plus',
    'podcast',
    'poll_h',
    'poll',
    'poo_storm',
    'poo',
    'poop',
    'portrait',
    'pound_sign',
    'power_off',
    'pray',
    'praying_hands',
    'prescription_bottle_alt',
    'prescription_bottle',
    'prescription',
    'print',
    'procedures',
    'project_diagram',
    'pump_medical',
    'pump_soap',
    'puzzle_piece',
    'qrcode',
    'question_circle',
    'question',
    'quidditch',
    'quote_left',
    'quote_right',
    'quran',
    'radiation_alt',
    'radiation',
    'rainbow',
    'random',
    'receipt',
    'record_vinyl',
    'recycle',
    'redo_alt',
    'redo',
    'registered',
    'remove_format',
    'reply_all',
    'reply',
    'republican',
    'restroom',
    'retweet',
    'ribbon',
    'ring',
    'road',
    'robot',
    'rocket',
    'route',
    'rss_square',
    'rss',
    'ruble_sign',
    'ruler_combined',
    'ruler_horizontal',
    'ruler_vertical',
    'ruler',
    'running',
    'rupee_sign',
    'sad_cry',
    'sad_tear',
    'satellite_dish',
    'satellite',
    'save',
    'school',
    'screwdriver',
    'scroll',
    'sd_card',
    'search_dollar',
    'search_location',
    'search_minus',
    'search_plus',
    'search',
    'seedling',
    'server',
    'shapes',
    'share_alt_square',
    'share_alt',
    'share_square',
    'share',
    'shekel_sign',
    'shield_alt',
    'shield_virus',
    'ship',
    'shipping_fast',
    'shoe_prints',
    'shopping_bag',
    'shopping_basket',
    'shopping_cart',
    'shower',
    'shuttle_van',
    'sign_in_alt',
    'sign_language',
    'sign_out_alt',
    'sign',
    'signal',
    'signature',
    'sim_card',
    'sitemap',
    'skating',
    'skiing_nordic',
    'skiing',
    'skull_crossbones',
    'skull',
    'slash',
    'sleigh',
    'sliders_h',
    'smile_beam',
    'smile_wink',
    'smile',
    'smog',
    'smoking_ban',
    'smoking',
    'sms',
    'snowboarding',
    'snowflake',
    'snowman',
    'snowplow',
    'soap',
    'socks',
    'solar_panel',
    'sort_alpha_down_alt',
    'sort_alpha_down',
    'sort_alpha_up_alt',
    'sort_alpha_up',
    'sort_amount_down_alt',
    'sort_amount_down',
    'sort_amount_up_alt',
    'sort_amount_up',
    'sort_down',
    'sort_numeric_down_alt',
    'sort_numeric_down',
    'sort_numeric_up_alt',
    'sort_numeric_up',
    'sort_up',
    'sort',
    'spa',
    'space_shuttle',
    'spell_check',
    'spider',
    'spinner',
    'splotch',
    'spray_can',
    'square_full',
    'square_root_alt',
    'square',
    'stamp',
    'star_and_crescent',
    'star_half_alt',
    'star_half',
    'star_of_david',
    'star_of_life',
    'star',
    'step_backward',
    'step_forward',
    'stethoscope',
    'sticky_note',
    'stop_circle',
    'stop',
    'stopwatch_20',
    'stopwatch',
    'store_alt_slash',
    'store_alt',
    'store_slash',
    'store',
    'stream',
    'street_view',
    'strikethrough',
    'stroopwafel',
    'subscript',
    'subway',
    'suitcase_rolling',
    'suitcase',
    'sun',
    'superscript',
    'surprise',
    'swatchbook',
    'swimmer',
    'swimming_pool',
    'synagogue',
    'sync_alt',
    'sync',
    'syringe',
    'table_tennis',
    'table',
    'tablet_alt',
    'tablet',
    'tablets',
    'tachometer_alt',
    'tag',
    'tags',
    'tape',
    'tasks',
    'taxi',
    'teeth_open',
    'teeth',
    'temperature_high',
    'temperature_low',
    'tenge',
    'terminal',
    'text_height',
    'text_width',
    'th_large',
    'th_list',
    'th',
    'theater_masks',
    'thermometer_empty',
    'thermometer_full',
    'thermometer_half',
    'thermometer_quarter',
    'thermometer_three_quarters',
    'thermometer',
    'thumbs_down',
    'thumbs_up',
    'thumbtack',
    'ticket_alt',
    'times_circle',
    'times',
    'tint_slash',
    'tint',
    'tired',
    'toggle_off',
    'toggle_on',
    'toilet_paper_slash',
    'toilet_paper',
    'toilet',
    'toolbox',
    'tools',
    'tooth',
    'torah',
    'torii_gate',
    'tractor',
    'trademark',
    'traffic_light',
    'trailer',
    'train',
    'tram',
    'transgender_alt',
    'transgender',
    'trash_alt',
    'trash_restore_alt',
    'trash_restore',
    'trash',
    'tree',
    'trophy',
    'truck_loading',
    'truck_monster',
    'truck_moving',
    'truck_pickup',
    'truck',
    'tshirt',
    'tty',
    'tv',
    'umbrella_beach',
    'umbrella',
    'underline',
    'undo_alt',
    'undo',
    'universal_access',
    'university',
    'unlink',
    'unlock_alt',
    'unlock',
    'upload',
    'user_alt_slash',
    'user_alt',
    'user_astronaut',
    'user_check',
    'user_circle',
    'user_clock',
    'user_cog',
    'user_edit',
    'user_friends',
    'user_graduate',
    'user_injured',
    'user_lock',
    'user_md',
    'user_minus',
    'user_ninja',
    'user_nurse',
    'user_plus',
    'user_secret',
    'user_shield',
    'user_slash',
    'user_tag',
    'user_tie',
    'user_times',
    'user',
    'users_cog',
    'users',
    'utensil_spoon',
    'utensils',
    'vector_square',
    'venus_double',
    'venus_mars',
    'venus',
    'vial',
    'vials',
    'video_slash',
    'video',
    'vihara',
    'virus_slash',
    'virus',
    'viruses',
    'voicemail',
    'volleyball_ball',
    'volume_down',
    'volume_mute',
    'volume_off',
    'volume_up',
    'vote_yea',
    'vr_cardboard',
    'walking',
    'wallet',
    'warehouse',
    'water',
    'wave_square',
    'weight_hanging',
    'weight',
    'wheelchair',
    'wifi',
    'wind',
    'window_close',
    'window_maximize',
    'window_minimize',
    'window_restore',
    'wine_bottle',
    'wine_glass_alt',
    'wine_glass',
    'won_sign',
    'wrench',
    'x_ray',
    'yen_sign',
    'yin_yang',
    '500_px',
    'accessible_icon',
    'accusoft',
    'acquisitions_incorporated',
    'adn',
    'adobe',
    'adversal',
    'affiliatetheme',
    'airbnb',
    'algolia',
    'alipay',
    'amazon_pay',
    'amazon',
    'amilia',
    'android',
    'angellist',
    'angrycreative',
    'angular',
    'app_store_ios',
    'app_store',
    'apper',
    'apple_pay',
    'apple',
    'artstation',
    'asymmetrik',
    'atlassian',
    'audible',
    'autoprefixer',
    'avianex',
    'aviato',
    'aws',
    'bandcamp',
    'battle_net',
    'behance_square',
    'behance',
    'bimobject',
    'bitbucket',
    'bitcoin',
    'bity',
    'black_tie',
    'blackberry',
    'blogger_b',
    'blogger',
    'bluetooth_b',
    'bluetooth',
    'bootstrap',
    'btc',
    'buffer',
    'buromobelexperte',
    'buy_n_large',
    'buysellads',
    'canadian_maple_leaf',
    'cc_amazon_pay',
    'cc_amex',
    'cc_apple_pay',
    'cc_diners_club',
    'cc_discover',
    'cc_jcb',
    'cc_mastercard',
    'cc_paypal',
    'cc_stripe',
    'cc_visa',
    'centercode',
    'centos',
    'chrome',
    'chromecast',
    'cloudscale',
    'cloudsmith',
    'cloudversify',
    'codepen',
    'codiepie',
    'confluence',
    'connectdevelop',
    'contao',
    'cotton_bureau',
    'cpanel',
    'creative_commons_by',
    'creative_commons_nc_eu',
    'creative_commons_nc_jp',
    'creative_commons_nc',
    'creative_commons_nd',
    'creative_commons_pd_alt',
    'creative_commons_pd',
    'creative_commons_remix',
    'creative_commons_sa',
    'creative_commons_sampling_plus',
    'creative_commons_sampling',
    'creative_commons_share',
    'creative_commons_zero',
    'creative_commons',
    'critical_role',
    'css_3_alt',
    'css_3',
    'cuttlefish',
    'd_and_d_beyond',
    'd_and_d',
    'dailymotion',
    'dashcube',
    'delicious',
    'deploydog',
    'deskpro',
    'dev',
    'deviantart',
    'dhl',
    'diaspora',
    'digg',
    'digital_ocean',
    'discord',
    'discourse',
    'dochub',
    'docker',
    'draft_2_digital',
    'dribbble_square',
    'dribbble',
    'dropbox',
    'drupal',
    'dyalog',
    'earlybirds',
    'ebay',
    'edge',
    'elementor',
    'ello',
    'ember',
    'empire',
    'envira',
    'erlang',
    'ethereum',
    'etsy',
    'evernote',
    'expeditedssl',
    'facebook_f',
    'facebook_messenger',
    'facebook_square',
    'facebook',
    'fantasy_flight_games',
    'fedex',
    'fedora',
    'figma',
    'firefox_browser',
    'firefox',
    'first_order_alt',
    'first_order',
    'firstdraft',
    'flickr',
    'flipboard',
    'fly',
    'font_awesome_alt',
    'font_awesome_flag',
    'font_awesome_logo_full',
    'font_awesome',
    'fonticons_fi',
    'fonticons',
    'fort_awesome_alt',
    'fort_awesome',
    'forumbee',
    'foursquare',
    'free_code_camp',
    'freebsd',
    'fulcrum',
    'galactic_republic',
    'galactic_senate',
    'get_pocket',
    'gg_circle',
    'gg',
    'git_alt',
    'git_square',
    'git',
    'github_alt',
    'github_square',
    'github',
    'gitkraken',
    'gitlab',
    'gitter',
    'glide_g',
    'glide',
    'gofore',
    'goodreads_g',
    'goodreads',
    'google_drive',
    'google_play',
    'google_plus_g',
    'google_plus_square',
    'google_plus',
    'google_wallet',
    'google',
    'gratipay',
    'grav',
    'gripfire',
    'grunt',
    'gulp',
    'hacker_news_square',
    'hacker_news',
    'hackerrank',
    'hips',
    'hire_a_helper',
    'hooli',
    'hornbill',
    'hotjar',
    'houzz',
    'html_5',
    'hubspot',
    'ideal',
    'imdb',
    'instagram_square',
    'instagram',
    'intercom',
    'internet_explorer',
    'invision',
    'ioxhost',
    'itch_io',
    'itunes_note',
    'itunes',
    'java',
    'jedi_order',
    'jenkins',
    'jira',
    'joget',
    'joomla',
    'js_square',
    'js',
    'jsfiddle',
    'kaggle',
    'keybase',
    'keycdn',
    'kickstarter_k',
    'kickstarter',
    'korvue',
    'laravel',
    'lastfm_square',
    'lastfm',
    'leanpub',
    'less',
    'line',
    'linkedin_in',
    'linkedin',
    'linode',
    'linux',
    'lyft',
    'magento',
    'mailchimp',
    'mandalorian',
    'markdown',
    'mastodon',
    'maxcdn',
    'mdb',
    'medapps',
    'medium_m',
    'medium',
    'medrt',
    'meetup',
    'megaport',
    'mendeley',
    'microblog',
    'microsoft',
    'mix',
    'mixcloud',
    'mixer',
    'mizuni',
    'modx',
    'monero',
    'napster',
    'neos',
    'nimblr',
    'node_js',
    'node',
    'npm',
    'ns_8',
    'nutritionix',
    'odnoklassniki_square',
    'odnoklassniki',
    'old_republic',
    'opencart',
    'openid',
    'opera',
    'optin_monster',
    'orcid',
    'osi',
    'page_4',
    'pagelines',
    'palfed',
    'patreon',
    'paypal',
    'penny_arcade',
    'periscope',
    'phabricator',
    'phoenix_framework',
    'phoenix_squadron',
    'php',
    'pied_piper_alt',
    'pied_piper_hat',
    'pied_piper_pp',
    'pied_piper_square',
    'pied_piper',
    'pinterest_p',
    'pinterest_square',
    'pinterest',
    'playstation',
    'product_hunt',
    'pushed',
    'python',
    'qq',
    'quinscape',
    'quora',
    'r_project',
    'raspberry_pi',
    'ravelry',
    'react',
    'reacteurope',
    'readme',
    'rebel',
    'red_river',
    'reddit_alien',
    'reddit_square',
    'reddit',
    'redhat',
    'renren',
    'replyd',
    'researchgate',
    'resolving',
    'rev',
    'rocketchat',
    'rockrms',
    'safari',
    'salesforce',
    'sass',
    'schlix',
    'scribd',
    'searchengin',
    'sellcast',
    'sellsy',
    'servicestack',
    'shirtsinbulk',
    'shopify',
    'shopware',
    'simplybuilt',
    'sistrix',
    'sith',
    'sketch',
    'skyatlas',
    'skype',
    'slack_hash',
    'slack',
    'slideshare',
    'snapchat_ghost',
    'snapchat_square',
    'snapchat',
    'soundcloud',
    'sourcetree',
    'speakap',
    'speaker_deck',
    'spotify',
    'squarespace',
    'stack_exchange',
    'stack_overflow',
    'stackpath',
    'staylinked',
    'steam_square',
    'steam_symbol',
    'steam',
    'sticker_mule',
    'strava',
    'stripe_s',
    'stripe',
    'studiovinari',
    'stumbleupon_circle',
    'stumbleupon',
    'superpowers',
    'supple',
    'suse',
    'swift',
    'symfony',
    'teamspeak',
    'telegram_plane',
    'telegram',
    'tencent_weibo',
    'the_red_yeti',
    'themeco',
    'themeisle',
    'think_peaks',
    'trade_federation',
    'trello',
    'tripadvisor',
    'tumblr_square',
    'tumblr',
    'twitch',
    'twitter_square',
    'twitter',
    'typo_3',
    'uber',
    'ubuntu',
    'uikit',
    'umbraco',
    'uniregistry',
    'unity',
    'untappd',
    'ups',
    'usb',
    'usps',
    'ussunnah',
    'vaadin',
    'viacoin',
    'viadeo_square',
    'viadeo',
    'viber',
    'vimeo_square',
    'vimeo_v',
    'vimeo',
    'vine',
    'vk',
    'vnv',
    'vuejs',
    'waze',
    'weebly',
    'weibo',
    'weixin',
    'whatsapp_square',
    'whatsapp',
    'whmcs',
    'wikipedia_w',
    'windows',
    'wix',
    'wizards_of_the_coast',
    'wolf_pack_battalion',
    'wordpress_simple',
    'wordpress',
    'wpbeginner',
    'wpexplorer',
    'wpforms',
    'wpressr',
    'xbox',
    'xing_square',
    'xing',
    'y_combinator',
    'yahoo',
    'yammer',
    'yandex_international',
    'yandex',
    'yarn',
    'yelp',
    'yoast',
    'youtube_square',
    'youtube',
    'zhihu',
];

  constructor() {
  }

  ngOnInit(): void {
    this.term.valueChanges.pipe(
      throttleTime(64),
      filter((term) => term && term.length > 0),
      map((term) => {
        return this.icons.filter((element) => element.indexOf(term) !== -1);
      }),
    ).subscribe((results) => {
      this.results = results;
      }
    );
  }

  clear() {
    this.results.length = 0;
  }
}
